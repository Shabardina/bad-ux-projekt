import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase/firebase-config";

import styles from "./LoginFormStyles";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!isLogin && password !== confirmPassword) {
      alert("Lösenorden matchar inte");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      setError(""); // Clear errors on success
    } catch {
      setError("Fel användarnamn eller lösenord");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? "Logga in" : "Skapa konto"}</Text>

      <Text style={styles.label}>E-post</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={styles.label}>Lösenord</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {!isLogin && (
        <>
          <Text style={styles.label}>Bekräfta lösenord</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </>
      )}

      {error !== "" && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{isLogin ? "Logga in" : "Registrera"}</Text>
      </TouchableOpacity>

      <View style={styles.toggleContainer}>
        <Text>
          {isLogin ? "Har du inget konto?" : "Har du redan ett konto?"}
        </Text>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.toggleText}>
            {isLogin ? "Registrera dig här" : "Logga in här"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;


import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./LoginFormStyles";

/*import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";*/

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    } catch {
      setError("Fel användarnamn eller lösenord");
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.titel}>{isLogin ? "Logga in" : "Skapa konto"}</Text>

    <Text style={styles.label}>E-post</Text>
    
          <TextInput
            style={styles.input}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

        <Text style={styles.label}>Lösenord</Text>
          <TextInput
            style={styles.input}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

        {!isLogin && (
        <>
        <Text style={styles.label}>Bekräfta lösenord</Text>
            <TextInput
              style={styles.input}
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </>
        )}

        {error && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>{isLogin ? "Logga in" : "Registrera"}</Text>
            </TouchableOpacity>

        <View style={styles.toggleContainer}>
          <Text>
            {isLogin ? "Har du inget konto?" : "Har du redan ett konto?"}
          </Text>
          <TouchableOpacity type="button" onClick={() => setIsLogin(!isLogin)}
          >
            <Text style={styles.toggleText}>
                {isLogin ? "Registrera dig här" : "Logga in här"}
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default LoginForm;
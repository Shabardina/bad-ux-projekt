import { useRouter } from "expo-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Dropdown from '../components/ui/Dropdown';
import { auth } from "../firebase/firebase-config";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const isFormValid = email.trim() !== "" && password.trim() !== "";
  const router = useRouter();

  const [pin, setPin] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
   
  const handlePinChange = (text: string) => {
    const numericOnly = text.replace(/[^0-9]/g, '');
    if (numericOnly.length <= 3) {
      setPin(numericOnly);
    }
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleAnswerChange = (text: string) => {
    setAnswer(text);
  };

  const handleTimeChange = (text: string) => {
    const numericOnly = text.replace(/[^0-9]/g, '');
    setTime(numericOnly);
  };

  const handleSubmit = async () => {
    if (!isLogin && password !== confirmPassword) {
      alert("Lösenorden matchar inte");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/landningssida");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        router.push("/onboarding");
      }
    } catch {
      setError("Fel användarnamn eller lösenord");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? "Logga in" : "Skapa konto"}</Text>

      <Text style={styles.label}>Gillar du appen?</Text>
      <Dropdown/>
      <Text style={styles.label}>Hur många timmar per dag använder du appen?</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={handleTimeChange}
        keyboardType="numeric"
      />
      <Text style={styles.label}>私たちはあなたのすべてを相続することになりますか?</Text>
      <TextInput
        style={styles.input}
        value={answer}
        onChangeText={handleAnswerChange}
        keyboardType="default"
      />

      <Text style={styles.label}>E-post</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        value={email}
        // React Native's TextInput använder onChangeText som direkt skickar in sträng-värdet från inputen
        // till skillnad från web React där du behöver extrahera strängen via event.target.value.
        onChangeText={setEmail}
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
          <Text style={styles.label}>Vad har du för PIN?</Text>
          <TextInput
            style={styles.input}
            value={pin}
            onChangeText={handlePinChange}
            keyboardType="numeric"
            maxLength={3}
          />
          <Text style={styles.label}>Vad är din partners namn? *Max 4 bokstäver</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={handleNameChange}
            keyboardType="default"
            maxLength={4}
          />
        </>
      )}

      {error && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.disabledButton]}
        onPress={handleSubmit}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>
          {isLogin ? "Logga in" : "Registrera"}
        </Text>
      </TouchableOpacity>

      <View style={styles.toggleContainer}>
        <Text style={styles.toggleTextWhite}>
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
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "white",
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    color: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ff6f91",
    padding: 10,
    borderRadius: 5,
    color: "white",
  },
  button: {
    backgroundColor: "#B92209",
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  toggleContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  toggleText: {
    color: "#007AFF",
    paddingLeft: 5,
  },
  error: {
    marginTop: 10,
    color: "#34DD9C",
  },
  toggleTextWhite: {
    color: "white",
  },
  disabledButton: {
    backgroundColor: "#ff6f91",
    color: "black",
  },
});
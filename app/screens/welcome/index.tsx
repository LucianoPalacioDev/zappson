import { useTheme } from "@/hooks/useThemeColor";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useStyles from "./styles";

export default function WelcomeScreen() {
  const [name, setName] = useState("");
  const { colors } = useTheme();
  const styles = useStyles();

  const handleContinue = () => {
    if (name.trim()) {
      console.log("handleContinue");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Los Simpsons</Text>
        <Text style={styles.emoji}>📺</Text>
        <Text style={styles.subtitle}>¡Bienvenido!</Text>
        <Text style={styles.description}>
          Descubre episodios aleatorios de la familia más famosa de Springfield.
          ¡Prepárate para reír con Homer, Marge, Bart, Lisa y Maggie!
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>¿Cuál es tu nombre?</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Escribe tu nombre aquí"
          placeholderTextColor={"#6B7280"}
          selectionColor={colors.white}
        />

        <TouchableOpacity
          style={[styles.button, !name.trim() && styles.buttonDisabled]}
          onPress={handleContinue}
          disabled={!name.trim()}
        >
          <Text style={styles.buttonText}>¡Comenzar!</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

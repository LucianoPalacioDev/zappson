import { useTheme } from "@/hooks/useThemeColor";
import { useState } from "react";
import { StyleProp, Text, TextInput, TextStyle } from "react-native";
import useStyles from "./styles";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  customLabelStyles?: StyleProp<TextStyle>;
  customInputStyles?: StyleProp<TextStyle>;
}

export default function Input({
  label,
  placeholder,
  value,
  setValue,
  customLabelStyles,
  customInputStyles,
}: InputProps) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { colors } = useTheme();
  const styles = useStyles();

  return (
    <>
      <Text style={[styles.label, customLabelStyles]}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          isInputFocused && styles.inputFocused,
          customInputStyles,
        ]}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={"#6B7280"}
        selectionColor={colors.black}
        cursorColor={colors.black}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        returnKeyType="done"
      />
    </>
  );
}

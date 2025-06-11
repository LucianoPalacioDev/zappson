import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";
import { Text, View } from "react-native";
import useStyles from "./styles";

export default function FilterBox({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const styles = useStyles();
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{t(title)}</Text>
      {children}
    </View>
  );
}

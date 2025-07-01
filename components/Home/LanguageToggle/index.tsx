import { ENGLISH_LANGUAGE, SPANISH_LANGUAGE } from "@/constants/languages";
import type { Language } from "@/constants/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCallback, useMemo, useRef, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useStyles from "./styles";

interface LanguageOption {
  id: string;
  name: string;
  flag: string;
  value: Language;
}

const LANGUAGES: LanguageOption[] = [
  {
    id: ENGLISH_LANGUAGE,
    name: "English",
    flag: "🇺🇸",
    value: ENGLISH_LANGUAGE,
  },
  {
    id: SPANISH_LANGUAGE,
    name: "Español",
    flag: "🇦🇷",
    value: SPANISH_LANGUAGE,
  },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [buttonLayout, setButtonLayout] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const buttonRef = useRef<View>(null);
  const styles = useStyles();

  const selectedLanguage = useMemo(
    () => LANGUAGES.find((lang) => lang.value === language) || LANGUAGES[0],
    [language]
  );

  const handlePress = useCallback(() => {
    if (buttonRef.current) {
      buttonRef.current.measureInWindow((x, y, width, height) => {
        setButtonLayout({ x, y, width, height });
        setIsMenuVisible(true);
      });
    }
  }, [buttonRef]);

  const handleCloseMenu = useCallback(() => {
    setIsMenuVisible(false);
  }, []);

  const handleLanguageSelect = useCallback(
    (lang: Language) => {
      if (!setLanguage) return;
      setLanguage(lang);
      setIsMenuVisible(false);
    },
    [setLanguage]
  );

  return (
    <>
      <TouchableOpacity
        ref={buttonRef}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <Text style={styles.languageText}>{selectedLanguage.flag}</Text>
      </TouchableOpacity>

      <Modal
        transparent
        visible={isMenuVisible}
        animationType="fade"
        onRequestClose={handleCloseMenu}
      >
        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          activeOpacity={1}
          onPress={handleCloseMenu}
        >
          <View
            style={[
              styles.menuContainer,
              {
                top: buttonLayout.y + buttonLayout.height + 8,
                left: Math.max(
                  8,
                  buttonLayout.x - (150 - buttonLayout.width) / 2
                ),
              },
            ]}
            accessibilityViewIsModal
          >
            {LANGUAGES.map((lang) => (
              <TouchableOpacity
                key={lang.id}
                style={[
                  styles.menuItem,
                  selectedLanguage.id === lang.id && styles.selectedItem,
                ]}
                onPress={() => handleLanguageSelect(lang.value)}
              >
                <Text style={styles.flag}>{lang.flag}</Text>
                <Text style={styles.languageName}>{lang.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

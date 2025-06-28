import { ENGLISH_LANGUAGE, SPANISH_LANGUAGE } from "@/constants/languages";
import type { Language } from "@/constants/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import useStyles from "./styles";

interface LanguageMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

// TODO: use translation and constants to show text
// TODO: show a better menu
// TODO: use the modulate flags
export default function LanguageMenu({
  isVisible,
  onClose,
}: LanguageMenuProps) {
  const { setLanguage } = useLanguage();
  const styles = useStyles();

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <Modal
      transparent
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View
          style={styles.menuContainer}
          onStartShouldSetResponder={() => true}
        >
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleLanguageSelect(ENGLISH_LANGUAGE)}
          >
            <Text style={styles.flag}>🇺🇸</Text>
            <Text style={styles.languageText}>English</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleLanguageSelect(SPANISH_LANGUAGE)}
          >
            <Text style={styles.flag}>🇦🇷</Text>
            <Text style={styles.languageText}>Español</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

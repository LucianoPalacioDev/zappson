import { Modal, View } from "react-native";
import useStyles from "./styles";

type CustomModalProps = {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
};

export default function CustomModal({
  visible,
  onClose,
  children,
}: CustomModalProps) {
  const styles = useStyles();

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>{children}</View>
      </View>
    </Modal>
  );
}

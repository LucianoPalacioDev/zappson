import { ReactNode } from "react";
import {
  StatusBar,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Edge, SafeAreaView } from "react-native-safe-area-context";
import useStyles from "./styles";

type HeaderProps = {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  safeAreaEdges?: Edge[];
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  statusBarStyle?: "light-content" | "dark-content";
};

export default function Header({
  title,
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  safeAreaEdges = ["top"],
  containerStyle,
  contentStyle,
  statusBarStyle = "dark-content",
}: HeaderProps) {
  const styles = useStyles();

  return (
    <SafeAreaView
      edges={safeAreaEdges}
      style={[styles.safeArea, containerStyle]}
    >
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor="transparent"
        translucent
      />
      <View style={[styles.container, contentStyle]}>
        <View style={styles.leftContainer}>
          {leftIcon && (
            <TouchableOpacity onPress={onLeftPress} style={styles.iconButton}>
              {leftIcon}
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
        </View>
        {rightIcon && (
          <TouchableOpacity onPress={onRightPress} style={styles.iconButton}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

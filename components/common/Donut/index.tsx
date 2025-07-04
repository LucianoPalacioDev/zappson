import { useLanguage } from "@/contexts/LanguageContext";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import useStyles from "./styles";

export default function Donut() {
  const { t } = useLanguage();
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const styles = useStyles();

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -15,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [bounceAnim]);

  return (
    <Animated.Text
      style={[styles.donut, { transform: [{ translateY: bounceAnim }] }]}
    >
      {t("common.icons.donut")}
    </Animated.Text>
  );
}

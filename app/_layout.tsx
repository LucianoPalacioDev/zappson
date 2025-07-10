import Donut from "@/components/common/Donut";
import CustomEpisodeHeader from "@/components/Episode/Header";
import CustomHomeHeader from "@/components/Home/Header";
import CustomPreferencesHeader from "@/components/Preferences/Header";
import { ROUTES } from "@/constants/routes";
import { USERNAME_KEY } from "@/constants/store-keys";
import { ROUTES_TYPE } from "@/constants/types";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [initialRoute, setInitialRoute] = useState<ROUTES_TYPE | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const name = await SecureStore.getItemAsync(USERNAME_KEY);
        setInitialRoute(name ? ROUTES.HOME : ROUTES.WELCOME);
      } catch (error) {
        console.error("Error checking user:", error);
        setInitialRoute(ROUTES.WELCOME);
      }
    };

    checkUser();
  }, []);

  if (!initialRoute) {
    return (
      <LinearGradient
        colors={["#FFD700", "#FF8C00"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Donut />
      </LinearGradient>
    );
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <LanguageProvider>
        <AnimatedLinearGradient
          colors={["#FFD700", "#FF8C00"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1 }}
          entering={FadeIn.duration(100)}
          exiting={FadeOut.duration(100)}
        >
          <Stack
            initialRouteName={initialRoute}
            screenOptions={{
              contentStyle: {
                backgroundColor: "transparent",
              },
              headerShown: false,
              animation: "fade",
              animationDuration: 300,
            }}
          >
            <Stack.Screen name={ROUTES.WELCOME} />
            <Stack.Screen name={ROUTES.NOT_FOUND} />
            <Stack.Screen
              name={ROUTES.HOME}
              options={{
                headerShown: true,
                header: () => <CustomHomeHeader />,
              }}
            />
            <Stack.Screen
              name={ROUTES.EPISODE}
              options={{
                headerShown: true,
                header: () => <CustomEpisodeHeader />,
              }}
            />
            <Stack.Screen
              name={ROUTES.PREFERENCES}
              options={{
                headerShown: true,
                header: () => <CustomPreferencesHeader />,
              }}
            />
          </Stack>
        </AnimatedLinearGradient>
        <StatusBar style="dark" />
      </LanguageProvider>
    </ThemeProvider>
  );
}

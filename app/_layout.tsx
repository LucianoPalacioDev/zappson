import CustomEpisodeHeader from "@/components/Episode/Header";
import CustomHomeHeader from "@/components/Home/Header";
import CustomPreferencesHeader from "@/components/Preferences/Header";
import { ROUTES } from "@/constants/routes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Fredoka: require("../assets/fonts/Fredoka-Regular.ttf"),
    OpenSans: require("../assets/fonts/OpenSans-Regular.ttf"),
    OpenSansSemiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
    OpenSansBold: require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <LanguageProvider>
        <LinearGradient
          colors={["#FFD700", "#FF8C00"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1 }}
        >
          <Stack
            screenOptions={{
              contentStyle: {
                backgroundColor: "transparent",
              },
              headerShown: false,
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
        </LinearGradient>
        <StatusBar style="dark" />
      </LanguageProvider>
    </ThemeProvider>
  );
}

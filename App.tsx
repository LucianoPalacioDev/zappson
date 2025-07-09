import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import { ExpoRoot } from "expo-router";

export function App() {
  const [loaded] = useFonts({
    Fredoka: require("./assets/fonts/Fredoka-Regular.ttf"),
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) return null;

  const ctx = require.context("./app");
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);

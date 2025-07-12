import Donut from "@/components/common/Donut";
import { ROUTES } from "@/constants/routes";
import { USERNAME_KEY } from "@/constants/store-keys";
import { LinearGradient } from "expo-linear-gradient";
import { Redirect, type Route } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

export default function Index() {
  const [initialRoute, setInitialRoute] = useState<Route | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const name = await SecureStore.getItemAsync(USERNAME_KEY);
        setInitialRoute(name ? `/${ROUTES.HOME}` : `/${ROUTES.WELCOME}`);
      } catch (error) {
        console.error("Error checking user:", error);
        setInitialRoute(`/${ROUTES.WELCOME}`);
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

  return <Redirect href={initialRoute} />;
}

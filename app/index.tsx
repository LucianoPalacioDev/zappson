import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen
        options={{
          title: "Welcome",
        }}
      />
      <Text style={{ fontFamily: "Fredoka", fontSize: 24 }}>
        Welcome to Zappson!
      </Text>
    </View>
  );
}

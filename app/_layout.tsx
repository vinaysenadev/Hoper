import { Stack } from "expo-router";
import { Platform, Text, View } from "react-native";
import "react-native-reanimated";
import "../global.css";

export const unstable_settings = {
  // anchor: "(tabs)",
};

export default function RootLayout() {
  if (Platform.OS === "web") {
    // Web layout
    return (
      <View style={{ flex: 1 }}>
        <Text>Web Layout</Text>
      </View>
    );
  }

  // Mobile layout
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

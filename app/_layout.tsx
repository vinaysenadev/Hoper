import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";

import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

export const unstable_settings = {
  // anchor: "(tabs)",
};
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {

  const [loaded] = useFonts({
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      if (loaded) SplashScreen.hideAsync();
    }, 1500); // wait 1.5s before hiding
  }, [loaded]);

  // if (Platform.OS === "web") {
  //   <ClerkProvider tokenCache={tokenCache}>
  //     <Redirect href="/(auth)/welcome" />;
  //   </ClerkProvider>;
  //   // Web layout
  //   // return (
  //   //   <View style={{ flex: 1 }}>
  //   //     <Text>Web Layout </Text>
  //   //   </View>
  //   // );
  // }

  // Mobile layout
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
}

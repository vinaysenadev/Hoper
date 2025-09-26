import { useColorScheme } from "@/hooks/use-color-scheme";
import { Text, View } from "react-native";
import "react-native-reanimated";
import "../global.css";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="font-bold text-2xl bg-red-500">HHHello welcome hopper</Text>
    </View>
  );
}

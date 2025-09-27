import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="flex flex-col items-center justify-center flex-1 bg-white">
      <Text className="font-bold text-2xl">Sign in </Text>
    </SafeAreaView>
  );
};
export default SignIn;

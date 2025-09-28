import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Onboarding = () => {
  const swipwerRef = useRef<Swiper>(null);
  const [activeIndex, setactiveIndex] = useState(0);
  const isLastScreen = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between ">
      <TouchableOpacity
        className="flex w-full justify-end items-end p-5"
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
      >
        <Text className="text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swipwerRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px]  bg-teal-200 mx-1" />}
        activeDot={<View className="w-[32px] h-[4px]  bg-teal-500 mx-1" />}
        onIndexChanged={(index) => setactiveIndex(index)}
      >
        {onboarding.map((item) => {
          return (
            <View
              key={item.id}
              className="flex items-center justify-center p-5 "
            >
              <Image
                source={item.image}
                className="w-full h-[300px]"
                resizeMode="contain"
              />
              <View className="flex flex-row items-center justify-center w-full mt-10">
                <Text className="text-3xl font-JakartaBold text-center mx-10">
                  {item.title}
                </Text>
              </View>
              <Text className="text-lg text-center mx-3 font-JakartaSemiBold text-gray-500 mt-3">
                {item.description}
              </Text>
            </View>
          );
        })}
      </Swiper>
      <View className="w-full flex items-center mb-10 px-10">
        <CustomButton
          title={isLastScreen ? "Get Started" : "Next"}
          onPress={() =>
            isLastScreen
              ? router.replace("/(auth)/sign-up")
              : swipwerRef.current?.scrollBy(1)
          }
          className="w-11/12 mt-10"
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

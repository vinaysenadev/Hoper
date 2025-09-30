import { icons } from "@/constants";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Map from "./Map";

const HomeHeader = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace("/");
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View className="relative flex-1">
      <View className=" bg-white flex flex-row items-center justify-between pt-5 px-5">
        <Text className="text-2xl capitalize font-JakartaSemiBold">
          Welcome{" "}
          {user?.firstName ??
            user?.emailAddresses[0]?.emailAddress.split("@")[0]}
          👋
        </Text>
        <TouchableOpacity
          onPress={handleSignOut}
          className="bg-white p-2 rounded-full"
        >
          <Image source={icons.out} className="w-4 h-4" />
        </TouchableOpacity>
      </View>
      {/* gogle map search  */}
      <View className="flex mt-0 px-5">
        <Text>Search Form</Text>
      </View>
      <View className="mt-1 px-5">
        <Text className="font-JakartaSemiBold text-xl">
          Your Current Location
        </Text>
        {/* <Map/> */}
        <Map />
        {/* recent rides */}
        <Text className="text-xl font-JakartaBold mt-5 mb-1">Recent Rides</Text>
      </View>
    </View>
  );
};

export default HomeHeader;

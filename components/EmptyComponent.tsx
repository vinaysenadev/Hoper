import { images } from "@/constants";
import React from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

export const EmptyComponent = ({ loading = false }) => {
  return (
    <View className="flex flex-col flex-1 items-center justify-center ">
      <View className="justify-center flex-1 flex items-center">
        {!loading ? (
          <>
            <Image source={images.noResult} className="w-40 h-40" />
            <Text className="text-md">No recent rides found</Text>
          </>
        ) : (
          <>
            <ActivityIndicator size="large" className="text-teal-500"/>
          </>
        )}
      </View>
    </View>
  );
};

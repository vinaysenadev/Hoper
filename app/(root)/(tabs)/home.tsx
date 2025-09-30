import { EmptyComponent } from "@/components/EmptyComponent";
import HomeHeader from "@/components/HomeHeader";
import RideCard from "@/components/RideCard";
import { mockRides } from "@/constants";
import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView edges={["top"]} className="bg-white">
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={mockRides}
        renderItem={({ item }) => {
          return <RideCard ride={item} />;
        }}
        className="px-1"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 0,
        }}
        ListEmptyComponent={<EmptyComponent />}
        ListHeaderComponent={<HomeHeader />}
      />
    </SafeAreaView>
  );
};

export default Home;

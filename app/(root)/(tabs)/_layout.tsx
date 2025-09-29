import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`rounded-full flex flex-row items-center justify-center border-red-600  ${focused ? "bg-general-300" : ""}`}
  >
    <View
      className={`rounded-full  item-center justify-center w-12 h-12  ${focused ? "bg-general-400" : ""}`}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  </View>
);

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          color: "white",
          marginTop: 10,
        },
        tabBarStyle: {
          backgroundColor: "#14b8a6",
          paddingTop: 10,
          height: 110,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`${focused ? "bg-teal-700" : "bg-transparent"} size-12 rounded-md flex items-center justify-center`}
            >
              <Feather name="home" size={24} color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "My Rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`${focused ? "bg-teal-700" : "bg-transparent"} size-12 rounded-md flex items-center justify-center`}
            >
              <Feather name="book" size={24} color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`${focused ? "bg-teal-700" : "bg-transparent"} size-12 rounded-md flex items-center justify-center`}
            >
              <Ionicons
                name="chatbox-ellipses-outline"
                size={24}
                color="white"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`${focused ? "bg-teal-700" : "bg-transparent"} size-12 rounded-md flex items-center justify-center`}
            >
              <Ionicons name="person-outline" size={24} color="white" />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

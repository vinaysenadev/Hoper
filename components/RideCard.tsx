import { icons } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils";
import { Ride } from "@/types/type";
import React from "react";
import { Image, Text, View } from "react-native";

const RideCard = ({ ride }: { ride: Ride }) => {
  return (
    <View className="border-[0.5px] border-teal-400 shadow-slate-50 flex m-2  rounded-lg  overflow-hidden ">
      <View className="flex">
        <View className="flex flex-row p-1 items-start justify-start gap-4">
          <Image
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${ride.destination_longitude},${ride.destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
            }}
            className="w-[80px] h-[90px] rounded-lg"
          />

          {/* address */}
          <View className="flex flex-col flex-1">
            <View className="flex flex-row items-center justify-start gap-2 ">
              <Image source={icons.to} className="w-5 h-5" />
              <Text className="text-md font-JakartaMedium" numberOfLines={1}>
                {ride.origin_address}
              </Text>
            </View>

            <View className="flex flex-row items-center justify-start gap-2 ">
              <Image source={icons.point} className="w-5 h-5" />
              <Text className="text-md font-JakartaMedium" numberOfLines={1}>
                {ride.destination_address}
              </Text>
            </View>
          </View>
        </View>

        {/* date and time */}
        <View className="p-2 bg-slate-100   flex flex-col gap-2">
          <View className="flex flex-row items-center justify-between">
            <Text>Date & Time</Text>
            <Text className="text-md font-JakartaBold">
              {formatDate(ride.created_at)}, {formatTime(ride.ride_time)}
            </Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text>Driver</Text>
            <Text className="text-md font-JakartaBold" >
              {ride.driver.first_name} {ride.driver.last_name}
            </Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text>Car Seats</Text>
            <Text className="text-md font-JakartaBold" >
              {ride.driver.car_seats}
            </Text>
          </View>

          <View className="flex flex-row items-center justify-between">
            <Text>Payment Status</Text>
            <Text
              className={`capitalize text-md font-JakartaBold ${ride.payment_status === "paid" ? "text-green-500" : "text-red-500"}`}
             
            >
              {ride.payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideCard;

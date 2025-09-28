import { InputFieldProps } from "@/types/type";
import React from "react";
import { Image, Platform, Text, TextInput, View } from "react-native";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  console.log(props);
  return (
    <View className="my-1 w-full">
      <View className="my-1 w-full">
        <Text className={`text-md font-JakartaSemiBold mb-3 ${labelStyle}`}>
          {label}
        </Text>
        <View
          className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100  ${containerStyle}`}
        >
          {icon && (
            <Image
              source={icon}
              style={{ width: 24, height: 24 }}
              className={`w-6 h-6 ml-5 ${iconStyle}`}
            />
          )}
          <TextInput
            className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
            secureTextEntry={secureTextEntry}
            style={Platform.OS === "web" ? { outline: "none" } : {}}
            {...props}
          />
        </View>
      </View>
    </View>
  );
};

export default InputField;

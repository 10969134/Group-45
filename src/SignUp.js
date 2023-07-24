import {Image, useState, StyleSheet, Text, View,Dimensions,  TextInput, Platform } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "@expo/vector-icons";
const oval = require("./assets/oval_header.png");
const img = require("./assets/signup_banner.png");

const SignUp = ({ navigation }) => {
  const placeholder = {
    label: "Level of Education",
    value: null,
    color: "#fff",
  };
  const [level, setLevel] = useState("");
  const items = [
    {
      label: "Primary",
      value: "Primary",
    },
    {
      label: "Secondary",
      value: "Secondary",
    },
    {
      label: "Tertiary",
      value: "Tertiary",
    },
  ];

  const CustomIcon = () => {
    return <AntDesign name="down" size={15} color="black" />;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View className="flex-1 relative">
        <View style={[{ backgroundColor: "#618985" }]} className="h-full" />
        <Image
          source={img}
          className="h-56 w-72 absolute flex left-16 bottom-5"
        />
      </View>
      <KeyboardAvoidingView
        style={styles.curve}
        className="bg-white"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="flex pt-10 gap-y-5">
          <View style={{ position: "relative" }} className="px-12">
            <Text>Name</Text>
            <TextInput className="bg-gray-300 rounded-lg py-3 pl-10 text-gray-700 text-xl mt-2" />
            <Octicons
              style={{ position: "absolute", left: 60, top: 40 }}
              name="person"
              size={24}
              color="gray"
              className="absolute"
            />
          </View>
          <View style={{ position: "relative" }} className="px-12">
            <Text>Number</Text>
            <TextInput className="bg-gray-300 rounded-lg py-3 pl-10 text-gray-700 text-xl mt-2" />
            <Ionicons
              name="phone-portrait-outline"
              style={{ position: "absolute", left: 60, top: 40 }}
              size={24}
              color="gray"
              className="absolute"
            />
          </View>
          <View className="px-12">
            <View className="mt-2">
              <RNPickerSelect
                placeholder={placeholder}
                onValueChange={(value) => console.log(value)}
                items={items}
                style={{
                  inputIOS: {
                    fontSize: 15,
                    color: "#000",
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: "#618985",
                    borderRadius: 5,
                    backgroundColor: "#fff",
                  },
                  iconContainer: {
                    top: 17,
                    right: 12,
                  },
                }}
                value={level}
                useNativeAndroidPickerStyle={false}
                textInputProps={{ underlineColorAndroid: "transparent" }}
              />
            </View>
          </View>
          <View className="px-12 pt-5">
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              className="w-full rounded-lg"
              style={{
                height: 55,
                borderRadius: 5,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                backgroundColor: "#618985",
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#618985",
  },
  curve: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    flex: 1.5,
  },
  flexContainer: {
    flex: 1,
  },
});

import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
const oval = require("../../assets/oval_header.png");
const slide3 = require("../../assets/on_boarding_3.png");

const Screen3 = ({ navigation }: any) => {
  const { height } = Dimensions.get("window");
  const curveHeight = height * 0.5; // Adjust the value (0.2) as needed

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View className="flex-1 relative">
        <Image source={oval} style={[styles.curve, { height: curveHeight }]} />
        <Image
          source={slide3}
          className="h-56 w-72 absolute flex left-16 bottom-16"
        />
      </View>
      <View className="flex-1 flex justify-between">
        <View className="flex-1">
          <View className="mt-10">
            <Text className="text-center text-3xl text-gray-800 font-semibold">
              Answer Past Question
            </Text>
          </View>
          <View className="px-12 mt-10">
            <Text className="text-center text-gray-400 text-base">
              We Provide you with over 3,000 past questions and answers from
              Science, Mathematics, ICT, Social Studies, English etc
            </Text>
          </View>
        </View>
        <View className="flex flex-1 justify-center items-center mt-16">
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={{ backgroundColor: "#618985" }}
            className=" flex flex-row items-center  w-72 rounded-full py-4 justify-center px-4"
          >
            <Text className="text-white text-center text-base">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  curve: {
    width: "100%",
    resizeMode: "stretch",
  },
  flexContainer: {
    flex: 1,
  },
});

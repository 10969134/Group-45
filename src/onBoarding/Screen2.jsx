import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
const oval = require("../assets/oval_header.png");
import { FontAwesome } from "@expo/vector-icons";
const slide2 = require("../assets/on_boarding_2.png");

const Screen2 = ({ navigation }) => {
  const { height } = Dimensions.get("window");
  const curveHeight = height * 0.5; // 

  return (
    <View style={styless.container}>
      <StatusBar style="light" />
      <View className="flex-1 relative">
        <Image source={oval} style={[styless.curve, { height: curveHeight }]} />
        <Image
          source={slide2}
          className="h-64 w-72 absolute flex left-16 bottom-0"
        />
      </View>
      <View className="flex-1 flex ">
        <View className="mt-10">
          <Text className="text-center text-3xl text-gray-800 font-semibold">
            The Best Platform for
          </Text>
          <Text className="text-center text-3xl text-gray-800 font-semibold">
            learning
          </Text>
        </View>
        <View className="px-14 mt-10">
          <Text className="text-center text-gray-400 text-base">
            We Provide the best resources you need to prepare for your exams
          </Text>
        </View>
        <View className="flex items-center mt-10">
          <TouchableOpacity
            onPress={() => navigation.navigate("OnBoarding3")}
            style={{ backgroundColor: "#618985" }}
            className=" flex flex-row items-center gap-x-3 w-44 rounded-full py-4 justify-between px-4"
          >
            <Text className="text-white text-left text-base">Next</Text>
            <View className="bg-white px-4 py-1 rounded-full">
              <FontAwesome name="angle-right" size={18} color="#618985" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export { Screen2 };

const styless = StyleSheet.create({
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

export default Screen2;

const styles = StyleSheet.create({});

import {  Image, StyleSheet, Text, View, Dimensions, Button,} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
const oval = require("../assets/oval_header.png");
import { FontAwesome } from "@expo/vector-icons";
const slide1 = require("../assets/on_boarding_1.png");
import { tw } from "tailwind-react-native-classnames";

const Screen1 = ({ navigation }) => {
  const { height } = Dimensions.get("window");
  const curveHeight = height * 0.2;

  return (
    <View style={[styles.container]}>
      <StatusBar style="light" />
      <View style={tw`p-4 android:pt-2 bg-red-300 flex-row`}>
    <Text style={tw`text-md tracking-wide`}>Hello World</Text>
  </View>
      <View style={[]}>
        <Image source={oval} style={[styles.curve, { height: curveHeight }]} />
        <Image
          source={slide1}
          className=""/>
      </View>
      <View style={[]}>
        <View style={[]}>
          <Text style={[]}>
            Over 10,000 past
          </Text>
          <Text style={[]}>
            Questions in One Place
          </Text>
        </View>
        <View className="px-14 mt-10">
          <Text className="text-center text-gray-400 text-base">
            We Provide you with over 10,000 past questions and answers to get
            you throughly prepared for your exams
          </Text>
        </View>
        <View className="flex items-center mt-10">
          <TouchableOpacity
            onPress={() => navigation.navigate("OnBoarding2")}
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

export default Screen1;

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

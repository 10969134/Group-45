import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native";
const math = require("./assets/bece_math.png");

const img = require("./assets/social.png");

const SignUp = () => {
  const placeholder = {
    label: "Level of Education",
    value: null,
    color: "#fff",
  };
  const [level, setLevel] = React.useState("");
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

  const data = ["Primary", "Secondary", "Tertiary"];
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View className="flex-1 relative">
        <View style={[{ backgroundColor: "#618985" }]} className="h-full" />
        <View className="absolute flex gap-x-48 flex-row items-center justify-between left-8 bottom-5">
          <Text className="text-white text-3xl font-semibold tracking-widest pb-1">
            QuizFlow
          </Text>
          <Ionicons
            className=""
            name="settings-sharp"
            size={27}
            color="white"
          />
        </View>
      </View>
      <View style={styles.curve} className="bg-white">
        <View className="px-10 flex justify-evenly flex-row mt-10">
          <View className="flex items-center">
            <Text className="text-2xl font-semibold">368</Text>
            <Text className="text-gray-400">Score</Text>
          </View>
          <View className="w-[1px] h-15 bg-gray-300"></View>
          <View className="flex items-center">
            <Text className="text-red-500 text-2xl font-semibold">368</Text>
            <Text className="text-gray-400">wrongs</Text>
          </View>
          <View className="w-[1px] h-15 bg-gray-300"></View>
          <View className="flex items-center">
            <Text className="text-2xl font-semibold">1368</Text>
            <Text className="text-gray-400">Question</Text>
          </View>
          <View className="w-[1px] h-15 bg-gray-300"></View>
          <View className="flex items-center">
            <Text className="text-orange-400 text-2xl font-semibold">368</Text>
            <Text className="text-gray-400">Answered</Text>
          </View>
        </View>
        <View className="flex justify-center items-center">
          <View className="w-[85%] h-[0.8px] bg-gray-300 flex mt-3" />
        </View>

        <View className="flex flex-row mb-3 px-10 mt-5 gap-x-2">
          <View className="bg-primary w-28 flex justify-center items-center py-2 rounded-full">
            <Text className="text-white">Recent</Text>
          </View>
          <View className="border-primary border w-28 flex justify-center items-center py-2 rounded-full">
            <Text className="text-primary">Subjects</Text>
          </View>
          <View className="border-primary border w-28 flex justify-center items-center py-2 rounded-full">
            <Text className="text-primary">Result</Text>
          </View>
        </View>
        <View className="flex justify-center items-center"></View>
        <ScrollView>
          <View className="mx-10 mt-5">
            <Text className="text-xl">Quiz</Text>
            <View className="flex mt-5  flex-row shadow-lg py-4 rounded-lg border border-gray-300 bg-white">
              <Image className="w-20 h-20 rounded-md ml-3" source={img} />
              <View className="flex ml-4 justify-evenly">
                <Text className="text-xl font-medium">Mathematics</Text>
                <View className="flex flex-row gap-x-1 items-center">
                  <AntDesign name="profile" size={17} color="gray" />
                  <Text className="text-gray-400 text-base">150 Quiz</Text>
                </View>
                <View className="flex flex-row gap-x-1 items-center">
                  <Ionicons name="time-outline" size={20} color="gray" />
                  <Text className="text-gray-400 text-base">2019 SSCE</Text>
                </View>
              </View>
            </View>
            <View className="flex mt-5  flex-row shadow-lg py-4 rounded-lg border border-gray-300 bg-white">
              <Image
                className="w-20 h-20 rounded-md ml-3 border border-gray-300"
                source={math}
              />
              <View className="flex ml-4 justify-evenly">
                <Text className="text-xl font-medium">Mathematics</Text>
                <View className="flex flex-row gap-x-1 items-center">
                  <AntDesign name="profile" size={17} color="gray" />
                  <Text className="text-gray-400 text-base">150 Quiz</Text>
                </View>
                <View className="flex flex-row gap-x-1 items-center">
                  <Ionicons name="time-outline" size={20} color="gray" />
                  <Text className="text-gray-400 text-base">2019 SSCE</Text>
                </View>
              </View>
            </View>
            <View className="flex mt-5  flex-row shadow-lg py-4 rounded-lg border border-gray-300 bg-white">
              <Image className="w-20 h-20 rounded-md ml-3" source={img} />
              <View className="flex ml-4 justify-evenly">
                <Text className="text-xl font-medium">Mathematics</Text>
                <View className="flex flex-row gap-x-1 items-center">
                  <AntDesign name="profile" size={17} color="gray" />
                  <Text className="text-gray-400 text-base">150 Quiz</Text>
                </View>
                <View className="flex flex-row gap-x-1 items-center">
                  <Ionicons name="time-outline" size={20} color="gray" />
                  <Text className="text-gray-400 text-base">2019 SSCE</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
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
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 6,
  },
  flexContainer: {
    flex: 1,
  },
});

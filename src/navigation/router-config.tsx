import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";
import Screen1 from "../screens/onBoarding/Screen1";
import {Screen2} from "../screens/onBoarding/Screen2";
import Screen3 from "../screens/onBoarding/Screen3";

const Stack = createNativeStackNavigator();
const RouterConfig = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="OnBoarding1"
      >
        <Stack.Screen name="OnBoarding1" component={Screen1} />
        <Stack.Screen name="OnBoarding2" component={Screen2} />
        <Stack.Screen name="OnBoarding3" component={Screen3} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterConfig;

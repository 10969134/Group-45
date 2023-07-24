import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import HomeScreen from "./src/Home";
//import SignIn from "./src/SignIn";
//import SignUp from "./src/SignUp";
//import Setup from "./src/SetUp";
import Screen1 from "./src/onBoarding/Screen1";
import Screen2 from "./src/onBoarding/Screen2";
import Screen3 from "./src/onBoarding/Screen3";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="OnBoarding1">
        
          <Stack.Screen
            name="OnBoarding1"
            component={Screen1}
          />
          <Stack.Screen
            name="OnBoarding2"
            component={Screen2}
          />
          <Stack.Screen
            name="OnBoarding3"
            component={Screen3}
          />
          {/* <Stack.Screen
            name="SignUp"
            component={SignUp}
          /> */}
          
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

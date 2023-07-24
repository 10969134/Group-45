import * as React from 'react';
// import { NavigationContainer } from "@react-navigation/native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from "./src/components/screen";
import Screen0 from './src/onBoarding/Screen0';
import Screen1 from './src/onBoarding/Screen1';
import Screen2 from "./src/onBoarding/Screen2";
import Screen3 from "./src/onBoarding/Screen3";
import Login from './src/components/Screens/Login';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="OnBoarding1"
      >
        <Stack.Screen name="OnBoarding1" component={Onboarding} />
        <Stack.Screen
            name="Screen2"
            component={Screen2}
          />

<Stack.Screen
            name="Screen0"
            component={Screen0}
          />
          <Stack.Screen
            name="Screen1"
            component={Screen1}
          />
          <Stack.Screen
            name="Screen3"
            component={Screen3}
          />

<Stack.Screen
            name="Login"
            component={Login}
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

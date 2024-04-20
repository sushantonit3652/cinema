import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import starts from "./screens/startScreen";
import welocpmeScereen from "./screens/welcomeScreen";
import loginScreen from "./screens/loginScreen";
import SignupScreen from "./screens/signupScreen";
import HomeScreen from "./screens/homeScreen";
import MyTabs from "./screens/mytabsScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="startScreen"
          component={starts}
        />
        <Stack.Screen name="welcomeScreen" component={welocpmeScereen} />
        <Stack.Screen name="loginScreen" component={loginScreen} />
        <Stack.Screen name="signupScreen" component={SignupScreen} />
        <Stack.Screen name="homeScreen" component={HomeScreen} />
        <Stack.Screen name="mytabsScreen" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

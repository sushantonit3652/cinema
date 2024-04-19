import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import starts from "./screens/startScreen";
import welocpmeScereen from "./screens/welcomeScreen";
import loginScreen from "./screens/loginScreen";
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
        <Stack.Screen name="loginScreen" component={loginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Animated,
  Easing,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.Screen}>
      <View style={styles.firstbox}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "900",
            color: "rgba(0, 106, 130, 1)",
            marginBottom: 20,
          }}
        >
          Cinema+
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "400",
          }}
        >
          Enter your data
        </Text>
      </View>
      <View style={styles.textView1}>
        <TextInput
          style={styles.textInput1}
          placeholder={"Enter your username"}
          placeholderTextColor="grey"
        ></TextInput>
      </View>
      <View style={styles.textView2}>
        <TextInput
          style={styles.textInput2}
          placeholder="Enter your password"
          placeholderTextColor="grey"
        ></TextInput>
        <Image source={require("../assets/eye.png")}></Image>
      </View>
      <TouchableOpacity
        style={styles.gradientContainer}
        onPress={() => navigation.navigate("mytabsScreen")}
      >
        <LinearGradient
          colors={["rgba(3, 164, 198, 1)", "rgba(0, 106, 130, 1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.get}>Log in</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={{ marginTop: 30 }}>
        <Text style={{ color: "white" }}> Don't have account?</Text>
        <Text
          style={{ color: "rgba(60, 207, 239, 1)" }}
          onPress={() => navigation.navigate("signupScreen")}
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,

    marginTop: 10,
  },

  firstbox: {
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 1)",
    justifyContent: "center",
  },
  gradient: {
    width: 335,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  gradientContainer: {
    borderWidth: 2, // Set the border width here
    borderColor: "rgba(60, 207, 239, 1)", // Set the border color here
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 140,
    // Set the border radius here
  },
  get: {
    color: "#ffffffde",
    fontweight: 500,
    width: 92,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
  },
  city: {
    borderWidth: 1, // Set the border width here
    borderColor: "rgba(60, 207, 239, 1)", // Set the border color here
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textInput1: {
    color: "white",
    width: 280,
    borderColor: "white",
    borderRadius: 15,
  },
  textInput2: {
    color: "white",
    width: 280,
    paddingLeft: 14,
    borderColor: "white",
    borderRadius: 15,
  },
  textView1: {
    height: 60,
    width: 340,
    borderWidth: 1, // Set the border width here
    borderColor: "white", // Set the border color here
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 50,
  },
  textView2: {
    height: 60,
    width: 340,
    borderWidth: 1, // Set the border width here
    borderColor: "white", // Set the border color here
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,
  },
});
export default LoginScreen;

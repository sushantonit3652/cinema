import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Animated,
  Easing,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const loginScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleTextChange = (text) => setInputValue(text);
  const animatedValue = new Animated.Value(0);
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -35],
  });

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const animateLabel = () => {
    Animated.timing(animatedValue, {
      toValue: inputValue ? 1 : 0,
      duration: 700,
      easing: Easing.linear, // Change the easing function if needed
      useNativeDriver: true,
    }).start();
  };

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

      <View style={styles.container}>
        {/* <Animated.Text style={[styles.label, { transform: [{ translateY }], opacity }]}>
        USERNAME/MOBILENO
      </Animated.Text> */}
        <Animated.Text
          style={[
            styles.label,
            opacity,
            { transform: [{ translateY }] },
            { top: isFocused || inputValue ? -35 : 10 },
          ]}
        >
          USERNAME/MOBILENO
        </Animated.Text>
        <TextInput
          style={styles.textInput}
          placeholder={isFocused ? "Enter your username" : ""}
          placeholderTextColor="grey"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleTextChange}
          onKeyPress={animateLabel}
        />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your username"
        placeholderTextColor="white"
        label="USERNAME/MOBILENO"
        textColor="#51bc8a"
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your password"
        placeholderTextColor={"white"}
      ></TextInput>
      <View style={styles.gradientContainer}>
        <LinearGradient
          colors={["rgba(3, 164, 198, 1)", "rgba(0, 106, 130, 1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.get}>Log in</Text>
        </LinearGradient>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    position: "absolute",
    left: 10,
    color: "white",
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textInput: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
  },

  firstbox: {
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 110,
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
    // Set the border radius here
  },
  get: {
    color: "#ffffffde",
    fontfamily: "Poppins-Medium",
    fontweight: 500,
    width: 92,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
  },
  city: {
    borderWidth: 2, // Set the border width here
    borderColor: "rgba(60, 207, 239, 1)", // Set the border color here
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textInput: {
    color: "white",
    width: 340,
    height: 60,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    marginBottom: 60,
    paddingLeft: 20,
  },
});
export default loginScreen;

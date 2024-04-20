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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SignupScreen = ({ navigation }) => {
  // Animated values for label animations
  const [emailLabelPosition] = useState(new Animated.Value(0));
  const [usernameLabelPosition] = useState(new Animated.Value(0));
  const [passwordLabelPosition] = useState(new Animated.Value(0));
  const [confirmPasswordLabelPosition] = useState(new Animated.Value(0));

  // Animation function for sliding labels up
  const animateLabelUp = (labelPosition) => {
    Animated.timing(labelPosition, {
      toValue: -30,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  // Animation function for sliding labels down
  const animateLabelDown = (labelPosition) => {
    Animated.timing(labelPosition, {
      toValue: 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
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
      <View style={styles.textView1}>
        <Animated.Text
          style={[
            styles.label,
            { transform: [{ translateY: emailLabelPosition }] },
          ]}
        >
          Email
        </Animated.Text>
        <TextInput
          style={styles.textInput1}
          placeholder="Enter your Email"
          placeholderTextColor="grey"
          onFocus={() => animateLabelUp(emailLabelPosition)}
          onBlur={() => animateLabelDown(emailLabelPosition)}
        ></TextInput>
      </View>
      <View style={styles.textView2}>
        <Animated.Text
          style={[
            styles.label,
            { transform: [{ translateY: usernameLabelPosition }] },
          ]}
        >
          Username
        </Animated.Text>
        <TextInput
          style={styles.textInput2}
          placeholder="Enter your username"
          placeholderTextColor="grey"
          onFocus={() => animateLabelUp(usernameLabelPosition)}
          onBlur={() => animateLabelDown(usernameLabelPosition)}
        ></TextInput>
      </View>
      <View style={styles.textView3}>
        <Animated.Text
          style={[
            styles.label,
            { transform: [{ translateY: passwordLabelPosition }] },
          ]}
        >
          Password
        </Animated.Text>
        <TextInput
          style={styles.textInput3}
          placeholder="Enter your password"
          placeholderTextColor="grey"
          onFocus={() => animateLabelUp(passwordLabelPosition)}
          onBlur={() => animateLabelDown(passwordLabelPosition)}
        ></TextInput>
        <Image source={require("../assets/Vector.png")}></Image>
      </View>
      <View style={styles.textView4}>
        <Animated.Text
          style={[
            styles.label,
            { transform: [{ translateY: confirmPasswordLabelPosition }] },
          ]}
        >
          Confirm Password
        </Animated.Text>
        <TextInput
          style={styles.textInput4}
          placeholder="Enter your Confirm password"
          placeholderTextColor="grey"
          onFocus={() => animateLabelUp(confirmPasswordLabelPosition)}
          onBlur={() => animateLabelDown(confirmPasswordLabelPosition)}
        ></TextInput>
        <Image source={require("../assets/Vector.png")}></Image>
      </View>
      <View style={styles.gradientContainer}>
        <LinearGradient
          colors={["rgba(3, 164, 198, 1)", "rgba(0, 106, 130, 1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.get}>Sign up</Text>
        </LinearGradient>
      </View>
      <Text style={{ marginTop: 30 }}>
        <Text style={{ color: "white" }}> Don't have account?</Text>
        <Text style={{ color: "rgba(60, 207, 239, 1)" }}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    position: "absolute",
    left: 20,
    fontSize: 14,
    fontWeight: "400",
  },
  textInput: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
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
    borderWidth: 2,
    borderColor: "rgba(60, 207, 239, 1)",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,marginBottom:20
  },
  get: {
    color: "#ffffffde",
    fontweight: 500,
    width: 92,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
  },
  textView1: {
    height: 60,
    width: 340,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    paddingLeft:20,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  textView2: {
    height: 60,
    width: 340,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    overflow: "hidden",
   paddingLeft:20,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,
  },
  textView3: {
    height: 60,
    width: 340,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  textView4: {
    height: 60,
    width: 340,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },textInput1:{color:'green'}
});

export default SignupScreen;

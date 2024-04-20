import React from "react";
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const WelocpmeScereen = ({navigation}) => {
  return (
    <View style={styles.Screen}>
      <View style={styles.firstbox}>
        <Text
          style={{
            color: "white",
            fontSize: 23,
            fontWeight: "300",
          }}
        >
          Welcome to
        </Text>
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
        <View style={styles.city}>
          <LinearGradient
            colors={["rgba(3, 164, 198, 1)", "rgba(0, 106, 130, 1)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientcity}
          >
            <Text style={styles.cityText}>Choose your city</Text>
            <FontAwesomeIcon icon={faCaretDown} color="white" />
          </LinearGradient>
        </View>
      </View>
      <TouchableOpacity style={styles.gradientContainer} onPress={() => navigation.navigate("loginScreen")}>
        <LinearGradient
          colors={["rgba(3, 164, 198, 1)", "rgba(0, 106, 130, 1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text
            style={styles.get}
           
          >
            Continue
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  firstbox: {
    height: 180,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 1)",
    justifyContent: "space-around",
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
  cityText: { color: "white", fontSize: 15, fontWeight: "300" },
  gradientcity: {
    height: 54,
    width: 290,
    alignItems: "flex-start",
    display: "flex",
    padding: 16,
    gap: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent:'space-between'
  },
});
export default WelocpmeScereen;

import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const MovieDetailScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#130B2B", "#120A2B"]}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/image 1.png")}
          style={{ width: "100%", height: 525, marginTop: 8 }}
        ></Image>
        <TouchableOpacity
          style={{
            position: "absolute",
            alignSelf: "flex-start",
            marginTop: 60,
            marginLeft: 30,
          }}
          onPress={() => navigation.goBack()}
        >
          <LinearGradient
            colors={["rgba(3, 164, 198, 1)", "rgba(0, 106, 130, 1)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/backarrow.png")}
              style={{ height: 18, width: 16 }}
            ></Image>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.mainView}>
          <View style={styles.View1}>
            <Text style={styles.avatar}>Avatar 2: El camino del</Text>
            <Text style={styles.avatar}>agua</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.lorem}>Lorem ipsum dolor sit amet</Text>
            <Text style={styles.lorem}>consectetur más...</Text>
          </View>
          <Text style={styles.gender}>Gender: Science fiction</Text>
          <Text style={styles.duration}>Duration: 195 min</Text>
          <View style={styles.buttonview}>
            <TouchableOpacity style={styles.button1}>
              <LinearGradient
                colors={["rgba(3, 164, 198, 1)", "rgba(0, 106, 130, 1)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button1gradient}
              >
                <Text style={styles.date}>Mon</Text>
                <Text style={styles.date}>dec14</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
              <LinearGradient
                colors={["rgba(3, 164, 198, 1)", "rgba(0, 106, 130, 1)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button1gradient}
              >
                <Text style={styles.date}>Mon</Text>
                <Text style={styles.date}>dec14</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
              <LinearGradient
                colors={["rgba(3, 164, 198, 1)", "rgba(0, 106, 130, 1)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button1gradient}
              >
                <Text style={styles.date}>Mon</Text>
                <Text style={styles.date}>dec14</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
              <LinearGradient
                colors={["rgba(3, 164, 198, 1)", "rgba(0, 106, 130, 1)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button1gradient}
              >
                <Text style={styles.date}>Mon</Text>
                <Text style={styles.date}>dec14</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.gradientContainer}
            onPress={() => navigation.navigate("welcomeScreen")}
          >
            <LinearGradient
              // Array of colors for the gradient transition
              colors={["rgba(3, 164, 198, 1)", "rgba(0, 106, 130, 1)"]}
              // Starting point of the gradient
              start={{ x: 0, y: 0 }}
              // Ending point of the gradient
              end={{ x: 1, y: 1 }}
              style={styles.gradient}
            >
              <Text style={styles.get}>Continue</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: { color: "white", fontWeight: "600", fontSize: 25 },
  View1: {
    width: 329,
    height: 76,
    alignItems: "center",
    justifyContent: "center",
  },
  lorem: {
    color: "white",
  },
  view2: {
    height: 46,
    width: 280,
    justifyContent: "center",
    alignItems: "center",
  },
  gender: {
    color: "white",
    marginTop: 60,
  },
  duration: {
    color: "white",
    marginTop: 5,
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
    marginTop: 60,

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
  buttonview: {
    height: 56,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 45,
  },
  button1: { height: 56, width: 53, overflow: "hidden" },
  button1gradient: {
    height: 56,
    width: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    color: "white",
  },
  mainView: {
    position: "absolute",
    width: "100%",
    height: 5050,
    alignItems: "center",
    marginTop: "80%",
    
  },
});
export default MovieDetailScreen;

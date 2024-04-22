import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const MovieDetailScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
    
      <Image source={require("../assets/image 1.png")}></Image>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#130B2B", "#120A2B"]}
        style={{
          width: "100%",
          height: "100%",
        }}
      ></LinearGradient>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row'
  },
});
export default MovieDetailScreen;

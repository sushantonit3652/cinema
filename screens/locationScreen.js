import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const LocationScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,justifyContent:'center',alignItems:'center'
  },
});
export default LocationScreen;

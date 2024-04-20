import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const ProfileScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
  },
});
export default ProfileScreen;

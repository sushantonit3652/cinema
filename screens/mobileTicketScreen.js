import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const MobileTicketScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MobileTicketScreen</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,justifyContent:'center',alignItems:'center'
  },
});
export default MobileTicketScreen;

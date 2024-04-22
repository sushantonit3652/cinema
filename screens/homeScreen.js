import React from "react";
import { SafeAreaView, Text,StyleSheet } from "react-native";

const HomeScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container} >
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'grey',flex:1,justifyContent:'center',alignItems:'center'
    }
})
export default HomeScreen;

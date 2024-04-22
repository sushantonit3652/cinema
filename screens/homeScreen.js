import React from "react";
import { SafeAreaView, Text,StyleSheet ,TouchableOpacity,Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container} >
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
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',flex:1,alignItems:"flex-start"
    }
})
export default HomeScreen;

import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { LinearGradient } from "expo-linear-gradient";

const startScreen = ({navigation}) => {
    return (
        <View style={styles.Screen}>
            <View
                style={{
                    width: 195,
                    height: 267,
                    marginBottom: 65,
                    marginHorizontal: 91,
                }}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={["#03A4C6", "#006A82"]}
                    style={{
                        height: 267,
                        borderRadius: 20,
                    }}>
                </LinearGradient>
                <Image
                    source={require('../assets/camera-2301459_1280-PhotoRoom 1.png')}
                    resizeMode={"stretch"}
                    style={{
                        position: "absolute",
                        bottom: -29,
                        right: -93,
                        width: 368,
                        height: 257,
                    }}
                />
            </View>

            <View style={styles.gradientContainer} >
                <LinearGradient
                    // Array of colors for the gradient transition
                    colors={['rgba(3, 164, 198, 1)', 'rgba(0, 106, 130, 1)']}
                    // Starting point of the gradient
                    start={{ x: 0, y: 0 }}
                    // Ending point of the gradient
                    end={{ x: 1, y: 1 }}
                    style={styles.gradient}

                ><Text style={styles.get} onPress={()=>navigation.navigate('welcomeScreen')}>Get Start</Text></LinearGradient ></View>
        </View>
    );
}
const styles = StyleSheet.create({
    Screen: { justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 1)' },
    gradient: {
        width: 335,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',

    }, gradientContainer: {
        borderWidth: 2, // Set the border width here
        borderColor: 'rgba(60, 207, 239, 1)', // Set the border color here
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center', alignItems: 'center'
        // Set the border radius here
    }, get: {
        color: "#ffffffde",
        fontfamily: "Poppins-Medium",
        fontweight: 500,
        width: 92,
        justifyContent: 'center', alignItems: 'center', paddingLeft: 20
    }
})
export default startScreen;
import React, { useEffect, useRef } from "react";
import {
  ScrollView,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  Animated,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const ImageComponent1 = ({navigation}) => (
  <TouchableOpacity   onPress={() => navigation.navigate("movieDetailScreen")}>
    <View style={styles.item}>
      <Image source={require("../assets/Rectangle 55.png")} />
    </View>
  </TouchableOpacity>
);

const ImageComponent2 = () => (
  <View style={styles.item}>
    <Image
      source={require("../assets/blackadam.png")}
      style={{ height: 180, width: 105, borderRadius: 10 }}
    />
  </View>
);

const ImageComponent3 = () => (
  <View style={styles.item}>
    <Image source={require("../assets/wakanda.png")} />
  </View>
);

const ImageComponent4 = () => (
  <View style={styles.item}>
    <Image source={require("../assets/Rectangle 55.png")} />
  </View>
);
const MovieScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const data1 = [
    { id: "1", Component: ImageComponent1 },
    { id: "2", Component: ImageComponent1 },
    { id: "3", Component: ImageComponent1 },
    { id: "4", Component: ImageComponent1 },
  ];

  const data2 = [
    { id: "1", Component: ImageComponent2 },
    { id: "2", Component: ImageComponent2 },
    { id: "3", Component: ImageComponent2 },
    { id: "4", Component: ImageComponent2 },
  ];
  const data3 = [
    { id: "1", Component: ImageComponent3 },
    { id: "2", Component: ImageComponent3 },
    { id: "3", Component: ImageComponent3 },
    { id: "4", Component: ImageComponent3 },
  ];
  const data4 = [
    { id: "1", Component: ImageComponent4 },
    { id: "2", Component: ImageComponent4 },
    { id: "3", Component: ImageComponent4 },
    { id: "4", Component: ImageComponent4 },
  ];

  // Other data arrays...

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "19, 11, 43, 1",
          height: 88,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/Layer 2.png")}
          height={30}
          width={30}
          style={{ marginTop: 30 }}
        ></Image>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#999"
        />
      </View>
      <ScrollView style={{ marginTop: 8, gap: 12 }}>
        <ScrollView style={{ gap: 12, overflow: "hidden" }}>
          <View>
            <Text style={styles.heading}>Top Movies</Text>
            <FlatList
              data={data1}
              renderItem={({ item }) => <item.Component  navigation={navigation}/>}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </View>
        </ScrollView>
        <ScrollView>
          <View>
            <Text style={styles.heading}>Premieres</Text>
            <FlatList
              data={data2}
              renderItem={({ item }) => <item.Component />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </View>
        </ScrollView>

        <ScrollView>
          <View>
            <Text style={styles.heading}>Billboard</Text>
            <FlatList
              data={data3}
              renderItem={({ item }) => <item.Component />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </View>
        </ScrollView>
        <ScrollView>
          <View>
            <Text style={styles.heading}>Action Movies</Text>
            <FlatList
              data={data4}
              renderItem={({ item }) => <item.Component />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  heading: { color: "white", paddingLeft: 20, margin: 8 },
  item: {
    padding: 20,
    height: 180,
    width: 120,
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
  },
  searchInput: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderColor: "rgba(60, 207, 239, 1)",
    width: "80%",
    height: 38,
    marginTop: 30,
    paddingLeft: 10,
    color: "white",
    paddingRight: 20,
  },
});

export default MovieScreen;

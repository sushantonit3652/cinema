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
} from "react-native";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MovieScreen = ({}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const data1 = [
    { id: "1", title: "First Item" },
    { id: "2", title: "Second Item" },
    { id: "3", title: "Third Item" },
  ];

  const data2 = [
    { id: "4", title: "Fourth Item" },
    { id: "5", title: "Fifth Item" },
    { id: "6", title: "Sixth Item" },
  ];

  const data3 = [
    { id: "1", title: "First Item" },
    { id: "2", title: "Second Item" },
    { id: "3", title: "Third Item" },
  ];

  // Other data arrays...

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "grey",
          height: 88,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/Layer 2.png")}height={30} width={30}></Image>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#999"
        />
      </View>
      <ScrollView>
        <ScrollView style={{ height: "100%", width: "100%" }} horizontal>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data1}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data2}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data3}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data3}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          {/* Add more FlatList components as needed */}
        </ScrollView>
        <ScrollView style={{ height: "100%", width: "100%" }} horizontal>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data1}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data2}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data3}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data3}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          {/* Add more FlatList components as needed */}
        </ScrollView>
        <ScrollView style={{ height: "100%", width: "100%" }} horizontal>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data1}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data2}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data3}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data3}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          {/* Add more FlatList components as needed */}
        </ScrollView>
        <ScrollView style={{ height: "100%", width: "100%" }} horizontal>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data1}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data2}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data3}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data3}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          {/* Add more FlatList components as needed */}
        </ScrollView>
        <ScrollView style={{ height: "100%", width: "100%" }} horizontal>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data1}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data2}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data3}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data3}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          {/* Add more FlatList components as needed */}
        </ScrollView>
        <ScrollView style={{ height: "100%", width: "100%" }} horizontal>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data1}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data2}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data3}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <FlatList
              data={data3}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              horizontal
            />
          </Animated.View>
          {/* Add more FlatList components as needed */}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    height: 180,
    width: 105,
    marginHorizontal: 16,
    alignItems: "center",
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
    height: 44,
  },
});

export default MovieScreen;

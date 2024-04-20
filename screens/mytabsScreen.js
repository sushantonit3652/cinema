import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/homeScreen";
import ProfileScreen from "../screens/profileScreen";
import MovieScreen from "../screens/movieScreen";
const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      inactiveColor="white"
      barStyle={{ backgroundColor: "rgba(60, 207, 239, 1)" }}
    >
      <Tab.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="movieScreen"
        component={MovieScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="profileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;

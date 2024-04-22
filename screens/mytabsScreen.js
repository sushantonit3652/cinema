import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/homeScreen";
import ProfileScreen from "../screens/profileScreen";
import MovieScreen from "../screens/movieScreen";
import LocationScreen from "./locationScreen";
import MobileTicketScreen from "./mobileTicketScreen";

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="MovieScreen"
      activeColor="white"
      inactiveColor="white"
      barStyle={{ backgroundColor:["#130B2B", "#120A2B"] }}
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
        name="locationScreen"
        component={LocationScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
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
        name="mobileTicketScreen"
        component={MobileTicketScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="box" color={color} size={26} />
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

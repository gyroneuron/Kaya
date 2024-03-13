import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreen from "./SettingsScreen";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import CustomDrawer from "../components/CustomDrawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import InvestmentScreen from "./Investment";
import LogoutScreen from "./LogoutScreen";

const Drawer = createDrawerNavigator();

export default MainScreen = ({ route }) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabelStyle: {
          fontSize: 18,
          marginLeft: -20,
          color: "#e2cac4",
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home"
    >

      
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <FontAwesome name="home" size={24} color="#e2cac4" />
          ),
        }}
      />

      <Drawer.Screen
        name="Investment"
        component={InvestmentScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <FontAwesome name="money" size={24} color="#e2cac4" />
          ),
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <FontAwesome name="sign-out" size={24} color="#e2cac4"/>
          ),
        }}
        
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

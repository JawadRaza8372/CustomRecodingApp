import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import AboutScreen from "../Screens/AboutScreen";
import ContactScreen from "../Screens/ContactScreen";
const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

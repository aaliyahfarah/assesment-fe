import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PlanetListNavigator } from "./PlanetListNavigator";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { WishlistNavigator } from "./WishlistNavigator";

const Tab = createBottomTabNavigator();

export const BottomBarNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#1E3E62",
          },
          tabBarActiveTintColor: "#FF6500",
          tabBarInactiveTintColor: "rgb(184, 180, 182)",
        }}
      >
        <Tab.Screen
          name="PlanetListTab"
          component={PlanetListNavigator}
          options={{
            headerShown: false,
            tabBarLabel: "Planet List",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="globe" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="WishlistTab"
          component={WishlistNavigator}
          options={{
            headerShown: false,
            tabBarLabel: "Wishlist",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bookmark" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

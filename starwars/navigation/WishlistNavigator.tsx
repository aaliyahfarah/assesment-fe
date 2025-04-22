import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlanetDetailScreen } from "../screens/PlanetDetail/PlanetDetailScreen";
import { WishlistScreen } from "../screens/Wishlist/WishlistScreen";
import { WishlistProvider } from "../store/Wishlist";
import { defaultHeaderOptions } from "./Header";

const Stack = createNativeStackNavigator();

export const WishlistNavigator = () => {
  return (
    <WishlistProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Wishlist"
          component={WishlistScreen}
          options={defaultHeaderOptions("Wishlist")}
        />
        <Stack.Screen
          name="PlanetDetail"
          component={PlanetDetailScreen}
          options={defaultHeaderOptions("Planet Detail")}
        />
      </Stack.Navigator>
    </WishlistProvider>
  );
};

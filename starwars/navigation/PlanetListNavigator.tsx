import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlanetListScreen } from "../screens/PlanetList/PlanetListScreen";
import { PlanetDetailScreen } from "../screens/PlanetDetail/PlanetDetailScreen";
import { defaultHeaderOptions } from "./Header";

const Stack = createNativeStackNavigator();

export const PlanetListNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlanetList"
        component={PlanetListScreen}
        options={defaultHeaderOptions("Planet List")}
      />
      <Stack.Screen
        name="PlanetDetail"
        component={PlanetDetailScreen}
        options={defaultHeaderOptions("Planet Detail")}
      />
    </Stack.Navigator>
  );
};

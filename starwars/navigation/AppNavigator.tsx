import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlanetListNavigator } from './PlanetListNavigator';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="PlanetList"
                    component={PlanetListNavigator}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Planet List', 
                        tabBarIcon: () => null,
                    }} />
                <Tab.Screen 
                    name="Wishlist" 
                    // TO DO: Ganti component dengan navigator wishlist
                    component={PlanetListNavigator} 
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Wishlist', 
                        tabBarIcon: () => null,
                    }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};




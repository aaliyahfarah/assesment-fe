import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PlanetListScreen } from '../screens/PlanetList/PlanetListScreen';
import { PlanetDetailScreen } from '../screens/PlanetDetail/PlanetDetailScreen';

const Stack = createNativeStackNavigator();

export const PlanetListNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PlanetList"
                component={PlanetListScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Planet List', 
                    headerStyle: {
                        backgroundColor: 'rgb(0, 0, 0)',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerShadowVisible: false,
                }} />
            <Stack.Screen
                name="PlanetDetail"
                component={PlanetDetailScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Planet Detail', 
                    headerStyle: {
                        backgroundColor: 'rgb(0, 0, 0)',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerShadowVisible: false,
                }} />
        </Stack.Navigator>
    );
};

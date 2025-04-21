import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PlanetListScreen } from '../screens/PlanetList/PlanetListScreen';

const Stack = createNativeStackNavigator();

export const PlanetListNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Planet List"
                component={PlanetListScreen}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: 'rgb(70, 17, 112)',  
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff', 
                }} />
            {/* TO DO: Stack screen untuk planet detail */}
        </Stack.Navigator>
    );
};

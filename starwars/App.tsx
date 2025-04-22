import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomBarNavigator } from './navigation/BottomBarNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomBarNavigator />
    </GestureHandlerRootView>
  );
}

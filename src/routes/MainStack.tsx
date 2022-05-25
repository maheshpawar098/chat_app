import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainBottomTabs from './MainBottomTabs';
import {Room, Search} from '../container';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={MainBottomTabs} />
      <Stack.Screen name="Room" component={Room} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default MainStack;

import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Chats, Feed} from '../container';
import Icon from 'react-native-vector-icons/Ionicons';

const MainTab = createMaterialBottomTabNavigator();

const MainBottomTabs = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={`chatbubbles${focused ? '' : '-outline'}`}
              color={color}
              size={26}
            />
          ),
        }}
        name="Chats"
        component={Chats}
      />
      <MainTab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={`call${focused ? '' : '-outline'}`}
              color={color}
              size={26}
            />
          ),
        }}
        name="Calls"
        component={Feed}
      />
    </MainTab.Navigator>
  );
};

export default MainBottomTabs;

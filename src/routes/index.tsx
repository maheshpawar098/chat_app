import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainBottomTabs from './MainBottomTabs';
import MainStack from './MainStack';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppContainer;

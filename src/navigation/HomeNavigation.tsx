import React from 'react';
import {ScreenList} from './NavigationProp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';

const HomeNavigation = () => {
  const stack = createNativeStackNavigator<ScreenList>();
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="Home" component={Home} />
    </stack.Navigator>
  );
};

export default HomeNavigation;

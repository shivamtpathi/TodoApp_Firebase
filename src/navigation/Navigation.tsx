import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import AuthStack from './AuthStack';
import auth from '@react-native-firebase/auth';
import HomeNavigation from './HomeNavigation';
const Navigation = () => {
  const [user, setUser] = useState();
  const onAuthStateChanged = (user: any) => {
    setUser(user);
  };
  useEffect(() => {
    auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      {user ? <HomeNavigation /> : <AuthStack />}
      {/* <HomeNavigation /> */}
    </NavigationContainer>
  );
};

export default Navigation;

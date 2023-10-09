import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Navigation from './src/navigation/Navigation';

const App = (): React.JSX.Element => (
<SafeAreaView style={{flex: 1}}>
    {/* <Home/> */}
    {/* <Login /> */}
    {/* <SignUp /> */}
    <Navigation/>
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({});

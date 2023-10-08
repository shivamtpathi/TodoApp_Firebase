import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const App = (): React.JSX.Element => (
  <SafeAreaView style={{flex: 1}}>
    {/* <Home/> */}
    <Login />
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({});

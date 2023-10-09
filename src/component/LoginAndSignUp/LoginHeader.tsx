import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Welcome Back!</Text>
      <Text style={styles.subHeadingText}>Enter You Username & Password</Text>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        marginBottom:30
    },
  headingText: {
    fontSize: 30,
    color: 'green',
  },
  subHeadingText: {
    fontSize: 18,
  },
});

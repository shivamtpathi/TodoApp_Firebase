import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const LoginButton = () => {
  return (
    <TouchableOpacity
    // onPress={}
    activeOpacity={0.6}
     style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 25,
    backgroundColor:"green",
    width:120,
    alignItems:"center",
    borderRadius:3,
    justifyContent:"center",
    alignContent:"center",
    height:50,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 23,
    padding:3,
    fontWeight:"600",
   
  },
});

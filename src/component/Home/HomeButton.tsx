import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeButton = () => {
  return (
    <TouchableOpacity
      // onPress={}
      activeOpacity={0.6}
      style={styles.buttonContainer}>
      <Text style={styles.buttonText}>ADD</Text>
    </TouchableOpacity>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 25,
    backgroundColor: 'green',
    // width: 60,
    alignItems: 'center',
    borderRadius: 3,
    height: 40,
    width:"100%",
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 23,
    padding: 3,
    fontWeight: '600',
  },
});

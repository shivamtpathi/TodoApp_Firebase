import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Bottom = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.text}>Forgotten Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.text}>Or Create a New Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    margin: 2,
  },
});

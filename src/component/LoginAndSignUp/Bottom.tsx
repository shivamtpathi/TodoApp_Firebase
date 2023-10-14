import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
interface propstype{
  createAccountButton():void
  forgetButton():void
}
const Bottom = ({createAccountButton,forgetButton}:propstype) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={forgetButton} activeOpacity={0.6}>
        <Text style={styles.text}>Forgotten Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={createAccountButton} activeOpacity={0.6}>
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

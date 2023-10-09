import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SignUpHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Create</Text>
      <Text style={styles.headingText}>Account :)</Text>
    </View>
  );
};

export default SignUpHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 30,
  },
  headingText: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
  },
});

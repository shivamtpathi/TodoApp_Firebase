import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface proptype{
  text:string;
  headingText:string
}
const LoginHeader = ({headingText,text}:proptype) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{headingText}</Text>
      <Text style={styles.subHeadingText}>{text}</Text>
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

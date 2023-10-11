import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

interface propsType {
  value: string;
  placeHolder: string;
  onChangeText?:((text:string)=>void);
  secureTextEntry?:boolean
}

const UserInput = ({value,  placeHolder,onChangeText,secureTextEntry}: propsType) => (
  <TextInput
      style={styles.Input}
      placeholder={placeHolder}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
    />
)

export default UserInput

const styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    borderColor: 'green',
    fontSize: 18,
    height: 50,
    marginTop: 26,
  },
});
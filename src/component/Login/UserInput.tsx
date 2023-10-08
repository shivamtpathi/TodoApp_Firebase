import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

interface propsType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeHolder: string;
}

const UserInput = ({value, setValue, placeHolder}: propsType) => (
  <TextInput
      style={styles.Input}
      placeholder={placeHolder}
      onChangeText={e => setValue(e)}
      value={value}
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
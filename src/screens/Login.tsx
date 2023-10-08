import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import UserInput from '../component/Login/UserInput';
import LoginButton from '../component/Login/LoginButton';
import Header from '../component/Login/Header';
import Bottom from '../component/Login/Bottom';

const Login = () => {
  const [userName, setUserName] = useState<string>('');
  const [UserPassword, setUserPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Header />

      <UserInput
        value={userName}
        setValue={setUserName}
        placeHolder="Enter Your UserName"
      />
      <UserInput
        value={UserPassword}
        setValue={setUserPassword}
        placeHolder="Enter Your Password"
      />
      <LoginButton />
      <Bottom />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});

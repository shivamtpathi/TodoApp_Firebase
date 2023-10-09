import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import UserInput from '../component/LoginAndSignUp/UserInput';
import LoginButton from '../component/LoginAndSignUp/LoginButton';
import LoginHeader from '../component/LoginAndSignUp/LoginHeader';
import Bottom from '../component/LoginAndSignUp/Bottom';
import { NavigationProp } from '../navigation/NavigationProp';

interface propsType{
navigation:NavigationProp
}
const Login = ({navigation}:propsType) => {
  const [userName, setUserName] = useState<string>('');
  const [UserPassword, setUserPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <LoginHeader />

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
      <LoginButton title="Login" onPress={()=>navigation.navigate("SignUp",{"name":"shivam"})} />
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

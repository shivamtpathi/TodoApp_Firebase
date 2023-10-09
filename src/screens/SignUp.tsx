import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SignUpHeader from '../component/LoginAndSignUp/SignUpHeader';
import UserInput from '../component/LoginAndSignUp/UserInput';
import LoginButton from '../component/LoginAndSignUp/LoginButton';
import {NavigationProp, RoutePropType} from '../navigation/NavigationProp';
interface propsType {
  navigation: NavigationProp;
  route:RoutePropType
}
const SignUp = ({navigation,route}: propsType) => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [UserPassword, setUserPassword] = useState<string>('');
  const name=route.params?.name
  console.log("kak",name)
  return (
    <View style={styles.container}>
      <SignUpHeader />
      <UserInput
        value={email}
        setValue={setEmail}
        placeHolder="Enter Email Id"
      />
      <UserInput
        value={userName}
        setValue={setUserName}
        placeHolder="Create Username"
      />
      <UserInput
        value={UserPassword}
        setValue={setUserPassword}
        placeHolder="Create Password"
      />
      <LoginButton title="Signup"  onPress={()=>navigation.navigate("Login")} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});

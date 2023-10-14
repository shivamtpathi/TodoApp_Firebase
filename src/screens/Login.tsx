import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect,useState } from 'react';
import UserInput from '../component/LoginAndSignUp/UserInput';
import LoginButton from '../component/LoginAndSignUp/LoginButton';
import LoginHeader from '../component/LoginAndSignUp/LoginHeader';
import Bottom from '../component/LoginAndSignUp/Bottom';
import { NavigationProp } from '../navigation/NavigationProp';
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import * as yup from 'yup';
import PushNotification from 'react-native-push-notification';
interface propsType {
  navigation: NavigationProp;
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  UserPassword: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
});

const Login = ({ navigation }: propsType) => {





  const HandleLogin = async (values: { email: string; UserPassword: string }) => {
    try {
      const { email, UserPassword } = values;
      const userCredential = await auth().signInWithEmailAndPassword(email, UserPassword);
      
    } catch (error) {
      console.log('Login Error', error);
      Alert.alert('Something Went Wrong', 'Please Check Your Email And Password or Internet connection');
    }
  };


  useEffect(()=>{
    PushNotification.createChannel(
            {
              channelId: 'channelId', 
              channelName: 'channelName',
            
            },
            (created) => console.log(`createChannel returned '${created}'`)
          );
  },[])
  return (
    <Formik
      initialValues={{ email: '', UserPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={HandleLogin}
    >
      {({ values, handleChange, handleSubmit, errors, touched, isValid }) => (
        <View style={styles.container}>
          <LoginHeader  headingText="Welcome Back!" text="Enter Your Username & Password"/>

          <UserInput
            value={values.email}
            onChangeText={handleChange('email')}
            placeHolder="Enter Your Email"
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <UserInput
            value={values.UserPassword}
            onChangeText={handleChange('UserPassword')}
            placeHolder="Enter Your Password"
            secureTextEntry
          />
          {touched.UserPassword && errors.UserPassword && (
            <Text style={styles.errorText}>{errors.UserPassword}</Text>
          )}

          <LoginButton title="Login" onPress={handleSubmit} />

          <Bottom createAccountButton={() => navigation.navigate('SignUp') }   forgetButton={() => navigation.navigate('ForgetScreen')} />
        </View>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 5,
  },
});

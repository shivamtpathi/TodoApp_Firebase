import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserInput from '../component/LoginAndSignUp/UserInput';
import LoginButton from '../component/LoginAndSignUp/LoginButton';
import LoginHeader from '../component/LoginAndSignUp/LoginHeader';
import Bottom from '../component/LoginAndSignUp/Bottom';
import {NavigationProp} from '../navigation/NavigationProp';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import * as yup from 'yup';
interface propsType {
  navigation: NavigationProp;
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
});

const ForgetScreen = ({navigation}: propsType) => {
  const HandleForget = async (values: {email: string}) => {
    try {
      const {email} = values;
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        'Password Reset Email Sent',
        'Check your email to reset your password.',
      );
      navigation.goBack();
    } catch (error) {
      console.log('Password Reset Error', error);
      Alert.alert(
        'Password Reset Failed',
        'Something went wrong. Please check your email or internet connection.',
      );
    }
  };

  return (
    <Formik
      initialValues={{email: ''}}
      validationSchema={validationSchema}
      onSubmit={HandleForget}>
      {({values, handleChange, handleSubmit, errors, touched, isValid}) => (
        <View style={styles.container}>
          <LoginHeader headingText="Forget Password!" text="Enter Your Email" />

          <UserInput
            value={values.email}
            onChangeText={handleChange('email')}
            placeHolder="Enter Your Email"
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <LoginButton title="Get Link" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default ForgetScreen;

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

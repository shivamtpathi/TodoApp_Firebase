import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import SignUpHeader from '../component/LoginAndSignUp/SignUpHeader';
import UserInput from '../component/LoginAndSignUp/UserInput';
import LoginButton from '../component/LoginAndSignUp/LoginButton';
import {NavigationProp} from '../navigation/NavigationProp';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Formik} from 'formik';
import * as yup from 'yup';

interface User {
  userName: string;
  email: string;
}
const SignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email format'),
    userPassword: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number',
      ),
    userName: yup.string().required('Name is required'),
  });

  const signupWithEmailAndUsername = async (Values: {
    userName: string;
    email: string;
    userPassword: string;
  }) => {
    const {userName, userPassword, email} = Values;
    try {
      setLoading(true);
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        userPassword,
      );
      const user: User = {
        userName,
        email,
      };
      await firestore()
        .collection('users')
        .doc(userCredential.user.uid)
        .set(user);
      setLoading(false);
      // navigation.navigate('SignUp');
    } catch (error: any) {
      console.log('Error signing up:', error);
      setLoading(false);

      if (error.code === 'auth/email-already-in-use') {
        Alert.alert(
          'Email Already in Use',
          'The provided email address is already registered with another account.',
        );
      } else {
        Alert.alert(
          'Signup Error',
          'An error occurred during signup. Please try again later.',
        );
      }
    }
  };

  return (
    <Formik
      initialValues={{email: '', userName: '', userPassword: ''}}
      onSubmit={signupWithEmailAndUsername}
      validationSchema={validationSchema}>
      {({values, touched, errors, handleChange, handleSubmit}) => (
        <View style={styles.container}>
          <SignUpHeader />
          <UserInput
            value={values.email}
            onChangeText={handleChange('email')}
            placeHolder="Enter Your Email "
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}
          <UserInput
            value={values.userName}
            onChangeText={handleChange('userName')}
            placeHolder="Enter Your Full Name"
          />
          {touched.userName && errors.userName && (
            <Text style={styles.errorText}>{errors.userName}</Text>
          )}
          <UserInput
            value={values.userPassword}
            onChangeText={handleChange('userPassword')}
            placeHolder="Create New Password"
          />
          {touched.userPassword && errors.userPassword && (
            <Text style={styles.errorText}>{errors.userPassword}</Text>
          )}

          <LoginButton
            title="Signup"
            onPress={handleSubmit}
            loading={loading}
            // setLoading={setLoading}
          />
        </View>
      )}
    </Formik>
  );
};

export default SignUp;

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

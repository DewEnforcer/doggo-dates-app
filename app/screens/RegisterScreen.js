import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from "yup";

import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import Screen from '../components/Screen';
import usersClient from "../api/users";
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(3).label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const {logIn} = useAuth();

  const handleSignup = async regData => {
    const response = await usersClient.signUp(regData);
    if (!response.ok) return; //display error notification

    const token = response.headers("x-auth-token");
    logIn(token);

  }

  return (
    <Screen>
        <AppForm
            initialValues={{username: "", password: "", email: ""}}
            validationSchema={validationSchema}
            onSubmit={handleSignup}
        >
            <View style={styles.formFieldContainer}>
                <AppFormField name="username" placeholder="Enter your username.." autoCorrect={false} autoCapitalize="none"/>
                <AppFormField name="email" placeholder="Enter your email.." keyboardType="email-address" autoCapitalize="none"/>
                <AppFormField name="password" placeholder="Enter your password.." secureTextEntry autoCorrect={false}/>
                <SubmitButton title="Register"/>
            </View>
        </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  formFieldContainer: {
    paddingHorizontal: 10
  }
});

export default RegisterScreen;
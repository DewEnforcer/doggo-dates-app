import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from "yup";

import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import Screen from "../components/Screen";
import authClient from "../api/auth";
import useAuth from "../auth/useAuth";
import routes from '../components/navigation/routes';
import colors from '../config/colors';

const schema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    password: Yup.string().required().label("Password")
});


function LoginScreen({navigation}) {

  const {logIn} = useAuth();

  const handleLogin = async (loginData) => {
    const {ok, data} = await authClient.logIn(loginData);
    if (!ok) return; //add some error notification

    logIn(data);
    navigation.navigate(routes.FEED);
  }

  return (
    <Screen>
        <AppForm 
            initialValues={{username: "", password: ""}}
            validationSchema={schema}
            onSubmit={handleLogin}
        >
          <View style={styles.formFieldContainer}>
            <AppFormField name="username" placeholder="Enter your username.." autoCorrect={false} autoCapitalize="none" />
            <AppFormField name="password" placeholder="Enter your password.." secureTextEntry/>
            <SubmitButton title="Login"/>
          </View>
        </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1
  },
  formFieldContainer: {
    paddingHorizontal: 10
  }
});

export default LoginScreen;
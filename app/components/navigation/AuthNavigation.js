import React from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import routes from './routes';
import WelcomeScreen from '../../screens/WelcomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import colors from '../../config/colors';

const Stack = createStackNavigator();
const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={routes.WELCOME} screenOptions={{headerStyle: {backgroundColor: colors.primary}, headerTintColor: colors.white}}>
            <Stack.Screen name={routes.WELCOME} options={{headerShown: false}} component={WelcomeScreen}/>
            <Stack.Screen name={routes.LOGIN} component={LoginScreen}/>
            <Stack.Screen name={routes.REGISTER} component={RegisterScreen}/>
        </Stack.Navigator>
    )
}

export default AuthNavigator;
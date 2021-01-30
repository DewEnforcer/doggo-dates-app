import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import routes from './routes';
import AccountScreen from '../../screens/AccountScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import MessagesScreen from '../../screens/MessagesScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import CandidatesScreen from '../../screens/CandidatesScreen';
import ChatScreen from '../../screens/ChatScreen';
import colors from '../../config/colors';

const Stack = createStackNavigator();
const AccountNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={routes.ACCOUNT} screenOptions={{headerStyle: {backgroundColor: colors.primary}, headerTintColor: colors.white}}>
            <Stack.Screen name={routes.ACCOUNT} options={{headerShown: false}} component={AccountScreen}/>
            <Stack.Screen name={routes.PROFILE} options={{title: "My Profile"}} component={ProfileScreen}/>
            <Stack.Screen name={routes.MESSAGES} options={{headerShown: false}} component={MessagesScreen}/>
            <Stack.Screen name={routes.DATES} options={{title: "Potential doggos"}} component={CandidatesScreen}/>
            <Stack.Screen name={routes.SETTINGS} options={{headerShown: false}} component={SettingsScreen}/>
            <Stack.Screen name={routes.CHAT} options={{headerShown: false}} component={ChatScreen}/>
        </Stack.Navigator>
    )
}

export default AccountNavigator
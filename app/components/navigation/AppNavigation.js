import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import routes from "./routes";
import FeedScreen from "../../screens/FeedScreen";
import AccountNavigator from "./AccountNavigation";
import colors from "../../config/colors";

const Stack = createBottomTabNavigator();
const AppNavigator = () => {
    return (
        <Stack.Navigator tabBarOptions={
            {
                activeTintColor: colors.white,
                inactiveTintColor: colors.medium,
                activeBackgroundColor: colors.primary
            }
        }>
            <Stack.Screen name={routes.FEED} options={{title: "Doggos", tabBarIcon:({color, size}) => <MaterialCommunityIcons name="dog" color={color} size={size}/>}} component={FeedScreen}/>
            <Stack.Screen name={routes.ACCOUNT} options={{title: "My account", tabBarIcon:({color, size}) => <MaterialCommunityIcons name="account" color={color} size={size}/>}} component={AccountNavigator}/>
        </Stack.Navigator>
    )
}

export default AppNavigator;
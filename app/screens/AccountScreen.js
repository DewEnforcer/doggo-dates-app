import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Screen from '../components/Screen';

import ListItem from '../components/ListItem';
import routes from '../components/navigation/routes';
import colors from '../config/colors';


const sections = [
  {id: 1,icon: "account", title: "My profile", path: routes.PROFILE},
  {id: 2,icon: "email", title: "Messages", path: routes.MESSAGES},
  {id: 3,icon: "dog", title: "Potential doggos", path: routes.DATES},
  {id: 4,icon: "account-settings", title: "Settings", path: routes.SETTINGS},
];


function AccountScreen({navigation}) {

  const actions = [
    {id: 1, icon: "logout", title: "Logout", onPress: () => navigation.navigate(routes.WELCOME)}
  ]

  return (
    <Screen>
        <View style={styles.aboutContainer}>
            <Text style={{color: colors.white, fontSize: 18}}>Logged in as Happy Doggo</Text>
        </View>
        <FlatList
          data={sections}
          keyExtractor={s => s.id.toString()}
          renderItem={({item: s}) => <ListItem icon={s.icon} title={s.title} onPress={() => navigation.navigate(s.path)}/>}
        />
        <FlatList
          data={actions}
          keyExtractor={a => a.id.toString()}
          renderItem={({item:a}) => <ListItem icon={a.icon} title={a.title} onPress={a.onPress}/>}
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginVertical: 5,
    backgroundColor: colors.primary,
  },
});

export default AccountScreen;
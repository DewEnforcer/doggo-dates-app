import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

function AppTextInput({icon, style, ...rest}) {

  return (
    <View style={[styles.container, style]}>
        {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={25}/>}
        <TextInput {...rest}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginVertical: 5
  },
  icon: {
    marginRight: 10
  },
});

export default AppTextInput;
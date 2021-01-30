import React from 'react';
import { StyleSheet,View, TouchableOpacity, Text } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

function AppButton({title, icon, color = "white", style, onPress, ...rest}) {
  return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, style]}>
            {title && <Text style={styles.text}>{title}</Text>}
            {icon && <MaterialCommunityIcons name={icon} size={30} color={color}/>}
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 50,
    paddingVertical: 10,
    textAlign: "center",
    backgroundColor: "dodgerblue",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
      color: "white",
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: 16
  }
});

export default AppButton;
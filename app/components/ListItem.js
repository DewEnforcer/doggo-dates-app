import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";


function ListItem({icon, color = "black", avatar, title, subTitle, onPress}) {
  return (
       <TouchableOpacity onPress={onPress}>
           <View style={styles.container}>
               {icon && <MaterialCommunityIcons name={icon} color={color} size={30}/>}
               {avatar && <Image source={avatar} style={styles.avatar}/>}
               <View style={styles.textContainer}>
                   <Text style={styles.text}>{title}</Text>
                   {subTitle && <Text numberOfLines={2}>{subTitle}</Text>}
               </View>
           </View>
       </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 5,
    paddingVertical: 5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    marginHorizontal: 5
  },
  textContainer: {
      marginLeft: 5,
      width: "80%"
  },
  text: {
      fontSize: 18
  }
});

export default ListItem;
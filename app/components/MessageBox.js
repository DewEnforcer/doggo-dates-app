import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

function MessageBox({avatar, name, text, order}) {
  const avatarSide = order === 1 ? "row" : "row-reverse";
  const messageContentStyling = {
    textAlign: order === 1 ? "left" : "right"
  }

  return (
    <View style={[styles.container, {flexDirection: avatarSide}]}>
        <Image source={avatar} style={styles.avatar}/>
        <View style={styles.textContainer}>
            <Text style={[styles.name, messageContentStyling]}>{name}</Text>
            <Text style={[styles.text, messageContentStyling]}>{text}</Text>
        </View>
    </View>
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
    margin: 5,
    alignSelf: "flex-start",
  },
  textContainer: {
      marginLeft: 5,
      width: "80%",
  },
  text: {
      fontSize: 18,
  },
  name: {
    fontSize: 20,
    fontWeight: "500"
  }
});

export default MessageBox;
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import AppButton from "./Button";

const DEFAULT_NUMBER_OF_LINES = 4;

function Profile({images, title, text}) {
  const [image, setImage] = useState(0);

  const handleImageSwitch = order => {
    let newImage = image + order;
    if (newImage < 0) newImage = images.length - 1;
    else if (newImage > images.length - 1) newImage = 0;

    setImage(newImage);
  }

  return (
    <View style={styles.container}>
        <View style={styles.btnContainer}>
          <AppButton onPress={() => handleImageSwitch(-1)} style={{backgroundColor: "transparent", width: 50, height: 50}} icon="chevron-left"/>
          <AppButton onPress={() => handleImageSwitch(1)} style={{backgroundColor: "transparent", width: 50, height: 50}} icon="chevron-right"/>
        </View>
        <Image style={styles.image} source={images[image]}/>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={DEFAULT_NUMBER_OF_LINES}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  image: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10
  },
  btnContainer: {
    position: "absolute",
    top: 135,
    zIndex: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10
  }
});

export default Profile;
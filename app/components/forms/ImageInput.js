import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {MaterialCommunityIcons} from "@expo/vector-icons";

import colors from "../../config/colors";

function ImageInput({uri, onChangeImage}) {

  const askForPermissions = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted) Alert.alert("Error", "You need to enable permissions to access camera");
  }

  const pickImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.5
      })
      if (!result.cancelled) onChangeImage(result.uri);
  }

  const handlePress = () => {
      if (uri) return Alert.alert("Warning", "Are you sure you want to delete this picture?", [
          {title: "Yes", onPress: () => onChangeImage(uri)},
          {title: "No"}
      ])
      pickImage();
  }

  useEffect(() => {
    askForPermissions();
  }, [])

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            {uri && <Image style={styles.image} source={{uri: uri}}/>}
            {!uri && <MaterialCommunityIcons name="camera" size={35} color={colors.medium}/>}
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        width: 70,
        height: 70,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginHorizontal: 5
    },
    image: {
      width: "100%",
      height: "100%"
    }
});

export default ImageInput;
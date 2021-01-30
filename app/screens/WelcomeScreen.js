import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native';
import AppButton from '../components/Button';
import routes from '../components/navigation/routes';
import colors from '../config/colors';

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
        source={require("../assets/background.jpg")}
        blurRadius={10}
        style={styles.background}
    >
        <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
        <Text style={styles.tagline}>Find new doggo friends</Text>
        <View style={styles.controlsContainer}>
            <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)}/>
            <AppButton title="Register" onPress={() => navigation.navigate(routes.REGISTER)}/>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
  },
  logo: {
      width: 100,
      height: 100,
      position: "absolute",
      top: 50
  },
  tagline: {
    position: "absolute",
    top: 170,
    color: colors.white,
    fontWeight: "500"
  },
  controlsContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 10
  }
});

export default WelcomeScreen;
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from "expo-constants";

function Screen({style, children}) {
  return (
    <SafeAreaView style={[styles.container, style]}>
        {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      paddingTop: Constants.statusBarHeight,
  }
});

export default Screen;
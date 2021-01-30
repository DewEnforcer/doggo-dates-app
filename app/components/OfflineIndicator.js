import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from "expo-constants";
import {useNetInfo} from "@react-native-community/netinfo";

import colors from '../config/colors';

function OfflineIndicator() {
    const netInfo = useNetInfo();

    if (netInfo.isInternetReachable === true && netInfo.type !== "unknown") return null;

    return (
    <View style={styles.container}>
        <Text style={styles.text}>You are currently offline</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: "100%",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        position: "absolute",
        top: Constants.statusBarHeight,
        zIndex: 1
    },
  text: {
      color: "white",
      fontSize: 18
  }
});

export default OfflineIndicator;
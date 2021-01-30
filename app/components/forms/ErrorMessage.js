import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ErrorMessage({error}) {
  if (!error) return null;

  return (
    <Text style={styles.text}>{error}</Text>
  );
}

const styles = StyleSheet.create({
    text: {
        color: "tomato"
    }
});

export default ErrorMessage;
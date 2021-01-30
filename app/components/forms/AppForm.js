import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Formik} from "formik"; 

function AppForm({children, style, ...rest}) {
  return (
    <View style={style}>
      <Formik {...rest}>
           {() => <>{children}</>}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AppForm;
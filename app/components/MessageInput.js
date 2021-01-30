import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import AppTextInput from './forms/AppTextInput';
import colors from '../config/colors';
import SubmitIcon from './SubmitIcon';

function MessageInput({name, ...rest}) {

  const {values, setFieldValue} = useFormikContext();

  return (
    <View style={styles.container}>
        <AppTextInput style={styles.input} onChangeText={text => setFieldValue(name, text)} value={values[name]} {...rest}/>
        <SubmitIcon name="send" size={25}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  icon: {
  },
  input: {
    borderBottomWidth: 0
  }
});

export default MessageInput;
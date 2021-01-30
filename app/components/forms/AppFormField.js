import React from 'react';
import { useFormikContext } from 'formik';
import { View, StyleSheet, Text } from 'react-native';

import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({name, ...rest}) {

  const {values, errors, touched, setFieldTouched, setFieldValue} = useFormikContext();  

  return (
    <View style={styles.container}>
        <AppTextInput value={values[name]} onChangeText={text => setFieldValue(name, text)} onBlur={() => setFieldTouched(name)} {...rest}/>
        {touched[name] && <ErrorMessage error={errors[name]}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});

export default AppFormField;
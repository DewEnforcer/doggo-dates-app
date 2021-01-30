import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import Button from "../Button";

function SubmitButton({title, ...rest}) {

  const {handleSubmit} = useFormikContext();  

  return (
    <Button style={styles.button} title={title} {...rest} onPress={handleSubmit}/>
  );
}

const styles = StyleSheet.create({
  button: {}
});

export default SubmitButton;
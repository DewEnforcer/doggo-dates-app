import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { useFormikContext } from 'formik';

function SubmitIcon({name, size = 10, color = "black"}) {

  const {handleSubmit} = useFormikContext();

  return (
    <TouchableWithoutFeedback onPress={handleSubmit}>
        <MaterialCommunityIcons name={name} size={size} color={color}/>
    </TouchableWithoutFeedback>
  );
}

export default SubmitIcon;
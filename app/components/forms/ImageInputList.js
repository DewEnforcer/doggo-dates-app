import { useFormikContext } from 'formik';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import ErrorMessage from './ErrorMessage';
import ImageInput from './ImageInput';

function ImageInputList({name, maxNumberOfImages = 5}) {

  const {values, errors, setFieldValue} = useFormikContext();
  const images = values[name];

  const onImageRemove = uri => {
    const newImages = images.filter(u => u !== uri);
    setFieldValue(name, newImages);
  }

  const onImageAdd = uri => {
      if (images.length >= 10) return;
      const newImages = [...images, uri];
      setFieldValue(name, newImages);
  }

  return (
      <View>
        <View style={styles.container}>
            {images.map(uri => <ImageInput key={uri} uri={uri} onChangeImage={onImageRemove}/>)}
            <ImageInput onChangeImage={onImageAdd}/>
        </View>
        <ErrorMessage error={errors[name]}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      borderBottomColor: colors.medium,
      borderBottomWidth: 1,
      flexDirection: "row",
      flexWrap: "wrap"
  }
});

export default ImageInputList;
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";

import usersClient from "../api/users";
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import ImageInputList from '../components/forms/ImageInputList';
import SubmitButton from '../components/forms/SubmitButton';
import Screen from '../components/Screen';

function SettingsScreen(props) {
  const [settings, setSettings] = useState({
    password: "",
    email: "",
    locationRange: "",
    description: "",
    images: []
  })

  const getSettings = async () => {
    const {data} = await usersClient.getSettings(data)
    setSettings(data);
  }

  const handleSaveSettings = async items => {
    await usersClient.saveSettings(items);
  }

  const schema = Yup.object().shape({
    images: Yup.array().max(10).required()
  })

  useEffect(() => {
    getSettings();
  }, [])
  //im aware that changing email and password with no two step verification is not secure, but this is just a demo afterall
  return (
    <Screen>
      <AppForm
        initialValues={settings}
        onSubmit={handleSaveSettings}
        validationSchema={schema}
        enableReinitialize
      >
        <AppFormField icon="email" name="email" keyboardType="email-address"/>
        <AppFormField icon="lock" name="password" secureTextEntry/>
        <AppFormField icon="map-marker-radius" name="locationRange" keyboardType="numeric" min={1} max={100}/>
        <AppFormField icon="text-box" style={{paddingHorizontal: 10, alignItems: "flex-start"}} name="description" multiline={true} numberOfLines={2}/>
        <ImageInputList name="images" maxNumberOfImages={10}/>
        <SubmitButton title="Save" style={styles.button}/>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: "80%",
    alignSelf: "center"
  }
});

export default SettingsScreen;
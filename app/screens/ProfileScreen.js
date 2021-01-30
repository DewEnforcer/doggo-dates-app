import React from 'react';
import Profile from '../components/Profile';
import Screen from '../components/Screen';

const images = [require("../assets/dog1.jpg"), require("../assets/dog2.jpg")];

function ProfileScreen(props) {
  return (
    <Screen>
        <Profile title="Happy Doggo" images={images} text="Magna ex in eu laborum fugiat aute mollit laborum adipisicing nisi est aliqua. Eiusmod duis do sunt amet consectetur velit ea eu exercitation. Excepteur aliqua veniam voluptate irure duis consectetur nostrud labore cupidatat sit veniam et exercitation."/>
    </Screen>
  );
}
export default ProfileScreen;
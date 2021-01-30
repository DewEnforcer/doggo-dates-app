import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import AppButton from '../components/Button';
import Screen from '../components/Screen';
import feed from "../api/feed";
import dates from "../api/dates";
import Profile from '../components/Profile';
import colors from '../config/colors';

function FeedScreen(props) {
    const [doggo, setDoggo] = useState({
        id: null,
        username: "",
        description: "",
        images: []
    });

    const getDoggoDate = async () => {
        const {data} = await feed.getFeed();
        setDoggo(data);
    }

    useEffect(() => {
        getDoggoDate();
    }, [])

    const createResultObj = (like) => ({id: doggo.id, result: like});

    const handleDateLike = async () => {
        const {data, ok} = await dates.submitDateResult(createResultObj(true))
        if (!ok) return;

        setDoggo(data);
    }
    const handleDateDislike = async () => {
        const {data} = await dates.submitDateResult(createResultObj(false))
        if (!ok) return;

        setDoggo(data);
    }

  return (
    <Screen>
        <Profile title={doggo.username} images={doggo.images} text="Labore aute ut mollit sint. Voluptate do reprehenderit incididunt officia cillum. Fugiat anim dolor velit aliqua fugiat aliqua anim anim. Irure qui ipsum Lorem cillum adipisicing consectetur. Duis irure nostrud deserunt veniam cupidatat ipsum id mollit."/>
        <View style={styles.buttonContainer}>
            <AppButton onPress={handleDateDislike} icon="thumb-down" style={styles.buttonDislike}/>
            <AppButton onPress={handleDateLike} icon="thumb-up" style={styles.buttonLike}/>
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
      marginVertical: 20,
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-evenly"
  },
  buttonLike: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary
},
buttonDislike: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.secondary
  },
});

export default FeedScreen;
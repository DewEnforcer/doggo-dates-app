import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';

function CandidatesScreen(props) {
  const [candidates, setCandidates] = useState([]);

  const getCandidates = async () => {
    console.log("Gettings candidates...");
  }

  useEffect(() => {
    getCandidates();
  }, [])

  return (
    <Screen>
      <View style={styles.container}>
        {candidates.map( c => <Image key={c.id} source={c.image} style={styles.avatar}/>)}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  avatar: {
    width: 100,
    height: 100,
    margin: 5
  }
});

export default CandidatesScreen;
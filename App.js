import React, { useState, useEffect } from "react";
import {   StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  AsyncStorage,
  ImageBackground } from 'react-native';

import AppButton from "./Components/AppButton";

export default function App() {
  const [count, setCount] = useState(0);
  const [isOdd, setIsOdd] = useState(false);

  const countIncrementHandler = () => {
    setCount(count + 1);
    updateAsyncStorage(count + 1);
    
  };

  function updateAsyncStorage(count) {
    return new Promise(async (resolve, reject) => {
      try {
        await AsyncStorage.removeItem("count");
        await AsyncStorage.setItem("count", JSON.stringify(count));
        return resolve(true);
      } catch (e) {
        return reject(e);
      }
    });
  }

  async function fetchCount() {
    const countStored = await AsyncStorage.getItem("count");

    if (countStored) {
      setCount(JSON.parse(countStored));
    }
  }

  useEffect(() => {
    fetchCount();
  }, []);

  useEffect(() => {
    if (count % 2 === 0) {
      setIsOdd(true);
    } else {
      setIsOdd(false);
    }
  }, [count]);

  return (
    <View style={styles.container}>
      
      <ImageBackground source={
        isOdd 
        ? require('./assets/Images/dark-03.jpg')
        : require('./assets/Images/lightOn-01.jpg')
        } style={styles.image}>
        
        <View style={styles.middleContainer}>
          <Text style={styles.text}>The Creative Process</Text>
        </View>
        <View style={styles.middleIsh}>
          <Text style={styles.questionText}>{isOdd ? ('I have a brilliant idea') : ('Oops just kidding it sucks')} </Text>
        </View>
        <View style={styles.bottomContainer}>
          <AppButton countIncrementHandler= {countIncrementHandler} />
        </View>
        
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  middleContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 200,
  },
  middleIsh: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
    marginRight: 40,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  text: {
    color: "#5E6582",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  questionText: {
    color: "#BC8C20",
    fontSize: 28,
    fontWeight: "300",
    paddingBottom: 20,
    textAlign: "center",
  }

});


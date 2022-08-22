import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

const question1React = ({navigation}) => {
  
  this.state = {
    correctAnswerCounter: 0,
    incorrectAnswerCounter: 0
  };

  const [answer, setAnswer] = useState('npx create-react-app myReactApp');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "npx create-react-app myReactApp";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question2React');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question2React');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What is the correct command to create a new React project?</Text>
      
      <Button style={styles.btn} color="#40517C"
        title="npm create-react-app"
        onPress={() => checkAnswer("npm create-react-app")}
      />

      <Button color="#40517C"
        title="npm create-react-app myReactApp"
        onPress={() => checkAnswer("npm create-react-app myReactApp")}
      />

      <Button color="#40517C"
        title="npx create-react-app"
        onPress={() => checkAnswer("npx create-react-app")}
      />

      <Button color="#40517C"
        title="npx create-react-app myReactApp"
        onPress={() => checkAnswer("npx create-react-app myReactApp")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question1React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
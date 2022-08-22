import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question1JS, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question1JS';

const question2JS = ({navigation}) => {
  
  this.state = {
    correctAnswerCounter: question1JS.correctAnswerCounter,
    incorrectAnswerCounter: question1JS.incorrectAnswerCounter
  };

  const [answer, setAnswer] = useState('Both the <head> section and the <body> section are correct');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "Both the <head> section and the <body> section are correct";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question3JS');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question3JS');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Where is the correct place to insert a JavaScript?</Text>
      
      <Button style={styles.btn} color="#40517C"
        title="The <head> section"
        onPress={() => checkAnswer("The <head> section")}
      />

      <Button color="#40517C"
        title="Both the <head> section and the <body> section are correct"
        onPress={() => checkAnswer("Both the <head> section and the <body> section are correct")}
      />

      <Button color="#40517C"
        title="The <body> section"
        onPress={() => checkAnswer("The <body> section")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question2JS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
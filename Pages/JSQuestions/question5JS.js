import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question4JS, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question4JS';

const question5JS = ({navigation}) => {
  
  this.state = {
    correctAnswerCounter: question4JS.correctAnswerCounter,
    incorrectAnswerCounter: question4JS.incorrectAnswerCounter
  };

  const [answer, setAnswer] = useState('Math.round(7.25)');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "Math.round(7.25)";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('resultJS');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('resultJS');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>How do you round the number 7.25, to the nearest integer?</Text>
      
      <Button style={styles.btn} color="#40517C"
        title="round(7.25)"
        onPress={() => checkAnswer("round(7.25)")}
      />

      <Button color="#40517C"
        title="Math.rnd(7.25)"
        onPress={() => checkAnswer("Math.rnd(7.25)")}
      />

      <Button color="#40517C"
        title="rnd(7.25)"
        onPress={() => checkAnswer("rnd(7.25)")}
      />

      <Button color="#40517C"
        title="Math.round(7.25)"
        onPress={() => checkAnswer("Math.round(7.25)")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question5JS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
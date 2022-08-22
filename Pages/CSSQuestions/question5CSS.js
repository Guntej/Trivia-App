import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question4CSS, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question4CSS';

const question5CSS = ({navigation}) => {
  
  this.state = {
    correctAnswerCounter: question4CSS.correctAnswerCounter,
    incorrectAnswerCounter: question4CSS.incorrectAnswerCounter
  };

  const [answer, setAnswer] = useState('font-size');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "font-size";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('resultCSS');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('resultCSS');
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Which CSS property controls the text size?</Text>
       
      <Button style={styles.btn} color="#40517C"
        title="text-size"
        onPress={() => checkAnswer("text-size")}
      />

      <Button color="#40517C"
        title="font-size"
        onPress={() => checkAnswer("font-size")}
      />

      <Button color="#40517C"
        title="text-style"
        onPress={() => checkAnswer("text-style")}
      />

      <Button color="#40517C"
        title="font-style"
        onPress={() => checkAnswer("font-style")}
      />
      
      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question5CSS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
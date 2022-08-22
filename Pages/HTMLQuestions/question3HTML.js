import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question2HTML, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question2HTML';

const question3HTML = ({navigation}) => {
  this.state = {
    correctAnswerCounter: question2HTML.correctAnswerCounter,
    incorrectAnswerCounter: question2HTML.incorrectAnswerCounter
  };
  
  const [answer, setAnswer] = useState('<h1>');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "<h1>";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question4HTML');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question4HTML');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose the correct HTML element for the largest heading:</Text>
       
      <Button style={styles.btn} color="#40517C"
        title="<h1>"
        onPress={() => checkAnswer("<h1>")}
      />

      <Button color="#40517C"
        title="<h6>"
        onPress={() => checkAnswer("<h6>")}
      />

      <Button color="#40517C"
        title="<heading>"
        onPress={() => checkAnswer("<heading>")}
      />

      <Button color="#40517C"
        title="<header>"
        onPress={() => checkAnswer("<header>")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question3HTML;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question1HTML, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question1HTML';

const question2HTML = ({navigation}) => {
  this.state = {
    correctAnswerCounter: question1HTML.correctAnswerCounter,
    incorrectAnswerCounter: question1HTML.incorrectAnswerCounter
  };
  
  const [answer, setAnswer] = useState('<br>');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "<br>";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question3HTML');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question3HTML');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What is the correct HTML element for inserting a line break?</Text>

      <Button style={styles.btn} color="#40517C"
        title="<br>"
        onPress={() => checkAnswer("<br>")}
      />

      <Button style={styles.btn} color="#40517C"
        title="<break>"
        onPress={() => checkAnswer("<break>")}
      />
      
      <Button style={styles.btn} color="#40517C"
        title="<lb>"
        onPress={() => checkAnswer("<lb>")}
      />
      
      <Button style={styles.btn} color="#40517C"
        title="<bl>"
        onPress={() => checkAnswer("<bl>")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question2HTML;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
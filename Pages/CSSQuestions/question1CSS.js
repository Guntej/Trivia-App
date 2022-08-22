import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

const question1CSS = ({navigation}) => {
  
  this.state = {
    correctAnswerCounter: 0,
    incorrectAnswerCounter: 0
  };

  const [answer, setAnswer] = useState('Cascading Style Sheets');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "Cascading Style Sheets";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question2CSS');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question2CSS');
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>What does CSS stand for?</Text>
      
      <Button style={styles.btn} color="#40517C"
        title="Creative Style Sheets"
        onPress={() => checkAnswer("Creative Style Sheets")}
      />

      <Button color="#40517C"
        title="Colorful Style Sheets"
        onPress={() => checkAnswer("Colorful Style Sheets")}
      />

      <Button color="#40517C"
        title="Cascading Style Sheets"
        onPress={() => checkAnswer("Cascading Style Sheets")}
      />

      <Button color="#40517C"
        title="Computer Style Sheets"
        onPress={() => checkAnswer("Computer Style Sheets")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View> 
  );
}

export default question1CSS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
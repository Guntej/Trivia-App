import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question4React, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question4React';

const question5React = ({navigation}) => {
  
  this.state = {
    correctAnswerCounter: question4React.correctAnswerCounter,
    incorrectAnswerCounter: question4React.incorrectAnswerCounter
  };

  const [answer, setAnswer] = useState('True');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "True";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question5React');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question5React');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>React component names must begin with an uppercase letter.</Text>
      
      <Button style={styles.btn} color="#40517C"
        title="True"
        onPress={() => checkAnswer("True")}
      />

      <Button color="#40517C"
        title="False"
        onPress={() => checkAnswer("False")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question5React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
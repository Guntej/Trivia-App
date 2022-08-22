import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question3CSS, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question3CSS';

const question4CSS = ({navigation}) => {
  
  this.state = {
    correctAnswerCounter: question3CSS.correctAnswerCounter,
    incorrectAnswerCounter: question3CSS.incorrectAnswerCounter
  };

  const [answer, setAnswer] = useState('background-color');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "background-color";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question5CSS');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question5CSS');
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Which property is used to change the background color?</Text>
       
      <Button style={styles.btn} color="#40517C"
        title="color"
        onPress={() => checkAnswer("color")}
      />

      <Button color="#40517C"
        title="bgcolor"
        onPress={() => checkAnswer("bgcolor")}
      />

      <Button color="#40517C"
        title="background-color"
        onPress={() => checkAnswer("background-color")}
      />

      <Button color="#40517C"
        title="bg-color"
        onPress={() => checkAnswer("bg-color")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question4CSS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question4HTML, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question4HTML';

const question5HTML = ({navigation}) => {
  
  this.state = {
      correctAnswerCounter: question4HTML.correctAnswerCounter,
      incorrectAnswerCounter: question4HTML.incorrectAnswerCounter
  };

  const [answer, setAnswer] = useState('<ol>');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "<ol>";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('resultHTML');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('resultHTML');
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>How can you make a numbered list?</Text>
       
      <Button style={styles.btn} color="#40517C"
        title="<dl>"
        onPress={() => checkAnswer("<dl>")}
      />

      <Button color="#40517C"
        title="<ol>"
        onPress={() => checkAnswer("<ol>")}
      />

      <Button color="#40517C"
        title="<ul>"
        onPress={() => checkAnswer("<ul>")}
      />

      <Button color="#40517C"
        title="<list>"
        onPress={() => checkAnswer("<list>")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question5HTML;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question2CSS, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question2CSS';

const question3CSS = ({navigation}) => {
  
  this.state = {
    correctAnswerCounter: question2CSS.correctAnswerCounter,
    incorrectAnswerCounter: question2CSS.incorrectAnswerCounter
  };

  const [answer, setAnswer] = useState('body{color:black;}');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "body{color:black;}";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question4CSS');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question4CSS');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Which is the correct CSS syntax?</Text>
      
      <Button style={styles.btn} color="#40517C"
        title="{body:color=black;}"
        onPress={() => checkAnswer("{body:color=black;}")}
      />

      <Button color="#40517C"
        title="body{color:black;}"
        onPress={() => checkAnswer("body{color:black;}")}
      />

      <Button color="#40517C"
        title="{body;color:black;}}"
        onPress={() => checkAnswer("{body;color:black;}}")}
      />

      <Button color="#40517C"
        title="body:color=black;"
        onPress={() => checkAnswer("body:color=black;")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question3CSS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
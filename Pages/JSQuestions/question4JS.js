import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question3JS, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question3JS';

const question4JS = ({navigation}) => {
  
  this.state = {
    correctAnswerCounter: question3JS.correctAnswerCounter,
    incorrectAnswerCounter: question3JS.incorrectAnswerCounter
  };

  const [answer, setAnswer] = useState("var colors = ['red', 'green', 'blue']");
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "var colors = ['red', 'green', 'blue']";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question4JS');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question4JS');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What is the correct way to write a JavaScript array?</Text>
      
      <Button style={styles.btn} color="#40517C"
        title="var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
        onPress={() => checkAnswer("var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')")}
      />

      <Button color="#40517C"
        title="var colors = (1:'red', 2:'green', 3:'blue')"
        onPress={() => checkAnswer("var colors = (1:'red', 2:'green', 3:'blue')")}
      />

      <Button color="#40517C"
        title="var colors = 'red', 'green', 'blue'"
        onPress={() => checkAnswer("var colors = 'red', 'green', 'blue'")}
      />

      <Button color="#40517C"
        title="var colors = ['red', 'green', 'blue']"
        onPress={() => checkAnswer("var colors = ['red', 'green', 'blue']")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question4JS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
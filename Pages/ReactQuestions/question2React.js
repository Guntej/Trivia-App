import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question1React, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question1React';

const question2React = ({navigation}) => {
  
  this.state = {
    correctAnswerCounter: question1React.correctAnswerCounter,
    incorrectAnswerCounter: question1React.incorrectAnswerCounter
  };

  const [answer, setAnswer] = useState('npm start');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "npm start";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question3React');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question3React');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What command is used to start the React local development server?</Text>
      
      <Button style={styles.btn} color="#40517C"
        title="npm build"
        onPress={() => checkAnswer("npm build")}
      />

      <Button color="#40517C"
        title="npm run dev"
        onPress={() => checkAnswer("npm run dev")}
      />

      <Button color="#40517C"
        title="npm start"
        onPress={() => checkAnswer("npm start")}
      />

      <Button color="#40517C"
        title="npm serve"
        onPress={() => checkAnswer("npm serve")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question2React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
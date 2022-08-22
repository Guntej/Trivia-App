import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question3React, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question3React';

const question4React = ({navigation}) => {
  
  this.state = {
    correctAnswerCounter: question3React.correctAnswerCounter,
    incorrectAnswerCounter: question3React.incorrectAnswerCounter
  };

  const [answer, setAnswer] = useState('A property that lets you nest components in other components');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "A property that lets you nest components in other components";
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
      <Text style={styles.text}>What is the children prop?</Text>
      
      <Button style={styles.btn} color="#40517C"
        title="A property that lets you nest components in other components"
        onPress={() => checkAnswer("A property that lets you nest components in other components")}
      />

      <Button color="#40517C"
        title="A property that adds child values to state"
        onPress={() => checkAnswer("A property that adds child values to state")}
      />

      <Button color="#40517C"
        title="A property that lets you set an object as a property"
        onPress={() => checkAnswer("A property that lets you set an object as a property")}
      />

      <Button color="#40517C"
        title="A property that lets you pass data to child components"
        onPress={() => checkAnswer("A property that lets you pass data to child components")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question4React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
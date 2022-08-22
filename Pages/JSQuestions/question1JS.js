import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

const question1JS = ({navigation}) => {
  
  this.state = {
    correctAnswerCounter: 0,
    incorrectAnswerCounter: 0
  };

  const [answer, setAnswer] = useState('<script>');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "<script>";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question2JS');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question2JS');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inside which HTML element do we put the JavaScript?</Text>
      
      <Button style={styles.btn} color="#40517C"
        title="<script>"
        onPress={() => checkAnswer("<script>")}
      />

      <Button color="#40517C"
        title="<scripting>"
        onPress={() => checkAnswer("<scripting>")}
      />

      <Button color="#40517C"
        title="<js>"
        onPress={() => checkAnswer("<js>")}
      />

      <Button color="#40517C"
        title="<javascript>"
        onPress={() => checkAnswer("<javascript>")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question1JS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
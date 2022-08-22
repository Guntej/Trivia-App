import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question1CSS, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question1CSS';

const question2CSS = ({navigation}) => {
  
  this.state = {
    correctAnswerCounter: question1CSS.correctAnswerCounter,
    incorrectAnswerCounter: question1CSS.incorrectAnswerCounter
  };

  const [answer, setAnswer] = useState('<style>');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "<style>";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question3CSS');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question3CSS');
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Which HTML tag is used to define an internal style sheet?</Text>
      
      <Button style={styles.btn} color="#40517C"
        title="<script>"
        onPress={() => checkAnswer("<script>")}
      />

      <Button color="#40517C"
        title="<style>"
        onPress={() => checkAnswer("<style>")}
      />

      <Button color="#40517C"
        title="<css>"
        onPress={() => checkAnswer("<css>")}
      />

      <Button color="#40517C"
        title="/script>"
        onPress={() => checkAnswer("/script>")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question2CSS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
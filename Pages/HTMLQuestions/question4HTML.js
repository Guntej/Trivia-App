import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question3HTML, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question3HTML';

const question4HTML = ({navigation}) => {
  
  this.state = {
      correctAnswerCounter: question3HTML.correctAnswerCounter,
      incorrectAnswerCounter: question3HTML.incorrectAnswerCounter
  };

  const [answer, setAnswer] = useState('<table><tr><td>');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "<table><tr><td>";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question5HTML');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question5HTML');
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Which of these elements are all table elements?</Text>
       
      <Button style={styles.btn} color="#40517C"
        title="<table><head><tfoot>"
        onPress={() => checkAnswer("<table><head><tfoot>")}
      />

      <Button color="#40517C"
        title="<thead><body><tr>"
        onPress={() => checkAnswer("<thead><body><tr>")}
      />

      <Button color="#40517C"
        title="<table><tr><tt>"
        onPress={() => checkAnswer("<table><tr><tt>")}
      />

      <Button color="#40517C"
        title="<table><tr><td>"
        onPress={() => checkAnswer("<table><tr><td>")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
       
    </View>  
  );
}

export default question4HTML;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
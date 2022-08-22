import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

const question1HTML = ({navigation}) => {
  this.state = {
    correctAnswerCounter: 0,
    incorrectAnswerCounter: 0
  };
  
  const [answer, setAnswer] = useState('HyperText Markup Language');
  //const [answer, setAnswer] = useState(0);

  const checkAnswer = (answer) => {
    let ans = "HyperText Markup Language";
    if(answer === ans) {
      //correctAnswerCounter = correctAnswerCounter++;
      this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1;
      Alert.alert("You are correct!");
      setAnswer(this.state.correctAnswerCounter = this.state.correctAnswerCounter + 1);
      navigation.navigate('question2HTML');
    }
    else {
      //incorrectAnswerCounter = incorrectAnswerCounter++;
      this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1;
      Alert.alert("You are incorrect!");
      setAnswer(this.state.incorrectAnswerCounter = this.state.incorrectAnswerCounter + 1);
      navigation.navigate('question3HTML');
    }
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What does HTML stand for?</Text>
       
      <Button style={styles.btn} color="#40517C"
        title="HyperText Markup Language"
        onPress={() => checkAnswer("HyperText Markup Language")}
      />

      <Button color="#40517C"
        title="Home Tool Markup Language"
        onPress={() => checkAnswer("Home Tool Markup Language")}
      />

      <Button color="#40517C"
        title="Hyperlinks Markup Language"
        onPress={() => checkAnswer("Hyperlinks Markup Language")}
      />

      <Button color="#40517C"
        title="Hyper Tool Markup Language"
        onPress={() => checkAnswer("Hyper Tool Markup Language")}
      />

      <Text>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>
         
    </View>  
  );
}

export default question1HTML;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  text: {
    fontSize: 16, 
    textAlign: 'center', 
    marginTop: 25,
    paddingTop: 36
  }
  
});
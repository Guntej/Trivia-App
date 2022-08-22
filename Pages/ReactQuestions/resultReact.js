import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TouchableHighlight, Alert } from 'react-native';
import { Image } from 'react-native'

import question5React, {correctAnswerCounter, incorrectAnswerCounter} from './Pages/../question5React';

const resultReact = ({navigation}) => {

  this.state = {
      correctAnswerCounter: question5React.correctAnswerCounter,
      incorrectAnswerCounter: question5React.incorrectAnswerCounter
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quiz Result</Text>
       
      <Text style={styles.text}>Number of correct answers: {this.state.correctAnswerCounter}</Text>
      <Text style={styles.text}>Number of incorrect answers: {this.state.incorrectAnswerCounter}</Text>

      <Button style={styles.btn} color="#40517C"
        onPress={() => navigation.navigate('HomePage')}
        title="Retake"
      />

    </View>  
  );
}

export default resultReact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginBottom: 20,
  },
  
});
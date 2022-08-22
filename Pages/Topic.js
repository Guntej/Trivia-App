import React from 'react';
import {Button, Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
//import CountdownCircle from 'react-native-countdown-circle

import Rules from './Rules';//

import question1HTML from './HTMLQuestions/question1HTML';
import question1CSS from './CSSQuestions/question1CSS';
import question1JS from './JSQuestions/question1JS';
import question1React from './ReactQuestions/question1React';

const TopicPage = ({navigation}) => {
  global.correctAnswerCounter = 0;
  global.incorrectAnswerCounter = 0;
  return(
     
    <View style={styles.container}>
       <Text style={styles.text}>Choose your Topic:</Text>
       
        <Button color="#40517C" 
            onPress={() => navigation.navigate('question1HTML')}
            title="HTML"
          />

            <Button color="#40517C"
            onPress={() => navigation.navigate('question1CSS')}
            title="CSS"
          />

            <Button color="#40517C"
            onPress={() => navigation.navigate('question1React')}
            title="React"
          />

            <Button color="#40517C"
            onPress={() => navigation.navigate('question1JS')}
            title="Javascript"
          />
       
    </View>  
  );
}

export default TopicPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
     height: 50, 
     width:350,
     marginBottom:100,
    marginTop:100,
    backgroundColor: '#D3D3FF',
  },
  text: {
    fontSize: 18, 
    textAlign: 'center', 
    marginBottom: 16
  },

});
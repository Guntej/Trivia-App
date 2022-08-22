
import React, {useState} from 'react';
import { Image } from 'react-native'
import {Button, Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
//import CountdownCircle from 'react-native-countdown-circle
import { TextInput,  KeyboardAvoidingView } from 'react-native';
import Topic from './Topic';//
import Rules from './Rules';

const HomePage = ({navigation}) => {
const [answer, setAnswer] = useState();



  return(
     
    <View style={styles.container}>
     <Image style={styles.logo} source={require('../assets/logo.png')} />
       <Text style={styles.text}>Welcome to our Game</Text>


         <KeyboardAvoidingView enabled>
       
       <TextInput style={styles.textInput}
          value={ answer }
          onChangeText={(text) => setAnswer()}
          placeholder={'Enter your name'}
          keyboardType="null"
      />
      </KeyboardAvoidingView>


        <Button color="#40517C"
            onPress={() => navigation.navigate('Rules')}
            title="Next"
          />
       
    </View>  
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    backgroundColor: '#a5baf7',
  },
    logo: {
    height: 120,
    width: 340,
    alignItems:'top',
    marginBottom:400,
  },
  text: {
    fontSize: 18, 
    textAlign: 'center', 
    marginBottom: 20,
    marginTop:-300,
  },
  textInput:{
    fontSize: 18, 
    textAlign: 'center', 
    marginBottom: 20,
      backgroundColor:'white',
  },
 

});
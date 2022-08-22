
import React, {useState} from 'react';
import { Image } from 'react-native'
import {Button, Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
//import CountdownCircle from 'react-native-countdown-circle
import { TextInput,  KeyboardAvoidingView } from 'react-native';
import Topic from './Topic';//


const Rules = ({navigation}) => {
const [answer, setAnswer] = useState(0);



  return(
     
    <View style={styles.container}>
     <Image style={styles.logo} source={require('../assets/logo.png')} />
       <Text style={styles.h1}>Trivia Rules</Text>
        <Text style={styles.text}>1. No Cheating</Text>
         <Text style={styles.text}>2. 10 Sec Time Limits</Text>
          <Text style={styles.text}>3. You get 4 topics to choose from</Text>
           <Text style={styles.text}>4. 5 Questions per topic</Text>
            <Text style={styles.text}>5. Need atleast 80% to pass</Text>


        

        <Button color="#40517C"
            onPress={() => navigation.navigate('Topic')}
            title="Next"
          />
       
    </View>  
  );
}

export default Rules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: "center",
    alignItems: "center",
   
   
    backgroundColor: '#a5baf7',
  },
    logo: {
    height: 120,
    width: 340,
    alignItems:'top',
    marginBottom:50,
  },
  text: {
    fontSize: 18, 
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    marginBottom: 20,
   
  },
  h1: {
    fontSize: 22, 
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    marginBottom: 20,
   
  },
 
 
 

});
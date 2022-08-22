import * as React from 'react'; //klhgjkfjg 
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

import HomePage from './Pages/HomePage';
import Topic from './Pages/Topic';
import Rules from './Pages/Rules';
import question1HTML from './Pages/HTMLQuestions/question1HTML';
import question2HTML from './Pages/HTMLQuestions/question2HTML';
import question3HTML from './Pages/HTMLQuestions/question3HTML';
import question4HTML from './Pages/HTMLQuestions/question4HTML';
import question5HTML from './Pages/HTMLQuestions/question5HTML';
import resultHTML from './Pages/HTMLQuestions/resultHTML';

import question1CSS from './Pages/CSSQuestions/question1CSS';
import question2CSS from './Pages/CSSQuestions/question2CSS';
import question3CSS from './Pages/CSSQuestions/question3CSS';
import question4CSS from './Pages/CSSQuestions/question4CSS';
import question5CSS from './Pages/CSSQuestions/question5CSS';
import resultCSS from './Pages/CSSQuestions/resultCSS';

import question1JS from './Pages/JSQuestions/question1JS';
import question2JS from './Pages/JSQuestions/question2JS';
import question3JS from './Pages/JSQuestions/question3JS';
import question4JS from './Pages/JSQuestions/question4JS';
import question5JS from './Pages/JSQuestions/question5JS';
import resultJS from './Pages/JSQuestions/resultJS';

import question1React from './Pages/ReactQuestions/question1React';
import question2React from './Pages/ReactQuestions/question2React';
import question3React from './Pages/ReactQuestions/question3React';
import question4React from './Pages/ReactQuestions/question4React';
import question5React from './Pages/ReactQuestions/question5React';
import resultReact from './Pages/ReactQuestions/resultReact';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


const Stack = createStackNavigator();

export default function App() {
  return (
 
    
 
    <NavigationContainer>
       <Stack.Navigator initialRouteName='HomePage'>
          <Stack.Screen name="HomePage" component={HomePage}
            options={{
               title: 'Quiz',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
         <Stack.Screen name="Topic" component={Topic}
            options={{
               title: 'Topic',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />

            <Stack.Screen name="Rules" component={Rules}
            options={{
               title: 'Rules',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
            <Stack.Screen name="question1HTML" component={question1HTML}
            options={{
               title: 'question1HTML',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
           <Stack.Screen name="question2HTML" component={question2HTML}
            options={{
               title: 'question2HTML',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
           <Stack.Screen name="question3HTML" component={question3HTML}
            options={{
               title: 'question3HTML',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
           <Stack.Screen name="question4HTML" component={question4HTML}
            options={{
               title: 'question4HTML',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
           <Stack.Screen name="question5HTML" component={question5HTML}
            options={{
               title: 'question5HTML',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
           <Stack.Screen name="resultHTML" component={resultHTML}
            options={{
               title: 'Result',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />

      <Stack.Screen name="question1CSS" component={question1CSS}
            options={{
               title: 'question1CSS',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
      <Stack.Screen name="question2CSS" component={question2CSS}
            options={{
               title: 'question2CSS',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />

          <Stack.Screen name="question3CSS" component={question3CSS}
            options={{
               title: 'question3CSS',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
          <Stack.Screen name="question4CSS" component={question4CSS}
            options={{
               title: 'question4CSS',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
          <Stack.Screen name="question5CSS" component={question5CSS}
            options={{
               title: 'question5CSS',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
          <Stack.Screen name="resultCSS" component={resultCSS}
            options={{
               title: 'Result',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />

           <Stack.Screen name="question1JS" component={question1JS}
            options={{
               title: 'question1JS',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
      <Stack.Screen name="question2JS" component={question2JS}
            options={{
               title: 'question2JS',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />

          <Stack.Screen name="question3JS" component={question3JS}
            options={{
               title: 'question3JS',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
          <Stack.Screen name="question4JS" component={question4JS}
            options={{
               title: 'question4JS',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
          <Stack.Screen name="question5JS" component={question5JS}
            options={{
               title: 'question5JS',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
          <Stack.Screen name="resultJS" component={resultJS}
            options={{
               title: 'Result',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />

           <Stack.Screen name="question1React" component={question1React}
            options={{
               title: 'question1React',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
           <Stack.Screen name="question2React" component={question2React}
            options={{
               title: 'question2React',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
           <Stack.Screen name="question3React" component={question3React}
            options={{
               title: 'question3React',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
           <Stack.Screen name="question4React" component={question4React}
            options={{
               title: 'question4React',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
           <Stack.Screen name="question5React" component={question5React}
            options={{
               title: 'question5React',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} />
          <Stack.Screen name="resultReact" component={resultReact}
            options={{
               title: 'Result',
               headerStyle: { backgroundColor: '#f4511e' },
               headerTintColor: '#fff',
               headerTitleStyle: { fontWeight: 'bold' }
          }} /> 

       </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#a8cab0',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

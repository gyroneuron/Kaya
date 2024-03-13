import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import { createClient } from '@supabase/supabase-js';
import HomeScreen from './screens/MainScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/MainScreen';
import StartScreen from './screens/StartScreen';
import FormScreen from './screens/HomeScreen';
import RiskToleranceScreen from './screens/RiskToleranceScreen';
import Investment from './screens/Investment';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//web: 242102887628-08tbiilm741a2c7q62dgb4q5qh3o9pbh.apps.googleusercontent.com
//IOS: 242102887628-05h7kqaaj24nu6ouuuqddtps5i822bqq.apps.googleusercontent.com
// android: 242102887628-m7s9vtb91f4p27r03pdqhbragsio6n5k.apps.googleusercontent.com

export default function App() {
  
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Start'}>

        <Stack.Screen name='Start'component={StartScreen} options={{headerShown: false}} />
        <Stack.Screen name='Login'component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown: false}} />
        <Stack.Screen name='Main' component={MainScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Form' component={FormScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={HomeScreen}  options={{headerShown: false}}/>
        <Stack.Screen name='Results' component={RiskToleranceScreen}  options={{headerShown: false}}/>
        <Stack.Screen name='Invest' component={Investment}  options={{headerShown: false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
})
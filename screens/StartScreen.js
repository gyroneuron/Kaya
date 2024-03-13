import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
const logo = require('../assets/logo/Logo.png');

const StartScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#030637', padding: '3%' }}>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <Animatable.Image
          animation="fadeInDown" // Choose your preferred animation
          duration={1500}
          style={{height: 300, width: 300}}
          source={logo}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 32, alignItems: 'center'}}>
        <View style={{justifyContent: 'flex-start', width: '90%', marginVertical: '3%'}}>
            <Text style={{ fontSize: 33, fontWeight: 'bold', color: 'white' }}>
            Unlock Your <Text style={{color: '#910A67'}}>Investment Potential</Text>
            </Text>
        </View>

        <Animatable.View
          animation="fadeInUp" // Choose your preferred animation
          duration={1500}
          style={{
            width: '90%',
            marginVertical: '3%',
            marginTop: 24,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 15,
            }}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ color: '#030637', fontSize: 16, fontWeight: 'bold', textAlign: 'center', fontWeight: 'bold'}}>Get Started</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
};

export default StartScreen;

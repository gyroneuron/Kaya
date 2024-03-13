import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
  Alert
} from 'react-native';
import LogoButton from '../components/LogoButton';
const backgroundImg = require('../assets/Background.jpg');
const dimension = Dimensions.get('window');
const Width = dimension.width;
const Height = dimension.height;
const google = require('../assets/logo/google.png');
const Logo = require('../assets/logo/Logo.png');

import { supabase } from '../lib/supabase';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;

  const moveUp = () => {
    Animated.timing(translateY, {
      toValue: -100,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  const moveDown = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      Alert.alert(error.message);
    } else {
      setLoading(false);
      Alert.alert('SignUp Successful!\n Please Confirm you email');
      navigation.navigate('Login');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topConatiner}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: Width * 0.9,
          }}
        >
          <Image source={Logo} style={{ height: 160, width: 160 }} />
          <Text style={{ fontSize: 17 }}>English</Text>
        </View>
        <View style={{ width: Width * 0.9, justifyContent: 'flex-start' }}>
          <Text style={{ fontSize: 32, color: '#ffffff' }}>Sign Up</Text>
        </View>
      </View>

      <Animated.View
        style={[
          styles.middleContainer,
          { transform: [{ translateY: translateY }] },
        ]}
      >
        <TextInput
          placeholder="Enter Email"
          style={styles.inputContainer}
          blurOnSubmit={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          onFocus={moveUp}
          onBlur={moveDown}
        />
        <TextInput
          placeholder="Password"
          style={styles.inputContainer}
          blurOnSubmit={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          maxLength={18}
          onFocus={moveUp}
          onBlur={moveDown}
        />
      </Animated.View>

      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={signUpWithEmail} disabled={loading}>
          <View style={styles.buttonBox}>
            <Text style={{ color: '#ffffff', fontSize: 19 }}>
              Create account
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{ width: 80, height: 1, backgroundColor: '#C7C7C7' }}
          ></View>
          <Text style={{ color: '#C7C7C7' }}> Or continue with </Text>
          <View
            style={{ width: 80, height: 1, backgroundColor: '#C7C7C7' }}
          ></View>
        </View>
      </View>

      <View style={styles.bottomTextContainer}>
        <Text style={{ fontSize: 16, color: '#ffffff' }}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ fontSize: 16, color: '#4461F2' }}> Sign In </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#030637',
  },

  topConatiner: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginVertical: 15,
  },

  inputContainer: {
    height: Height * 0.08,
    width: Width * 0.9,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
  },
  innerContainer: {
    justifyContent: 'space-around',
    flex: 2,
  },

  buttonBox: {
    height: Height * 0.07,
    width: Width * 0.9,
    borderRadius: 10,
    backgroundColor: '#4461F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  middleContainer: {
    flex: 1.7,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bottomTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

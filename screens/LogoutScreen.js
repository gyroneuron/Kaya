import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import supabase from '../lib/supabase'
import { useNavigation } from '@react-navigation/native';

const LogoutScreen = () => {

  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      // Redirect to login screen or any other screen after logout
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };
  return (

    

    <View style={{flex: 1, backgroundColor: '#030637', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{
              color: "#ffffff",
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: '10%'
            }}>Already leaving us!?</Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <View
            style={{
              backgroundColor: "#4461F2",
              padding: 15,
              marginVertical: "2%",
              borderRadius: 15,
              alignItems: "center",
            }}
          >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Logout
          </Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default LogoutScreen
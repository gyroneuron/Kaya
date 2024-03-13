import { View, Text, StyleSheet, Image, ImageBackground} from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-ionicons';

const Drawer = createDrawerNavigator();

export default CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} style={{flex: 1}} contentContainerStyle={{}} >
        <View style={{borderRadius: 20, backgroundColor: '#030637', alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start', padding: 7}}>
          <Image source={require('../assets/logo/icons8-person-94.png')} style={{height: 65, width: 65}}/>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 19}}>Hello Vivek!</Text>
        </View>
        <View style={styles.optionContainer}>
        <DrawerItemList {...props}/>  
        </View>    
      </DrawerContentScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030637',
    padding: 5
  },
  userConatiner: {
    padding: 5,
    backgroundColor: '#218255',
    height: 150,
    borderBottomEndRadius: 15
  },
  optionContainer: {
    paddingVertical: 20
  },
})

import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
const dimension = Dimensions.get('window')
const Width = dimension.width;
const Height = dimension.height;
const google = require('../assets/logo/google.png');

const LogoButton = ({link}) => {
  return (
    <TouchableOpacity>
    <View style={styles.container}>
      <Image 
        source={(link)}
        style={styles.logoImage}
      />
    </View>

    </TouchableOpacity>
  )
}

export default LogoButton

const styles = StyleSheet.create({
    container: {
        height: Height*0.07,
        width: 117,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
})
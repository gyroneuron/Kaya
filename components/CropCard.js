import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React from "react";

const CropCard = ({ name }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={require('../assets/logo/apple.png')} style={{borderRadius: 15}}/> 
          <Text style={{ fontWeight: "bold", fontSize: 15, color: 'white' }}>
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CropCard;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },

  card: {
    backgroundColor: 'red',
    height: 200,
    width: 150,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

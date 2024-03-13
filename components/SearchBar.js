import {Keyboard, StyleSheet, TextInput, View, Button} from 'react-native';
import {React, useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Feather, FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons'

export default SearchBar = () => {

  const [clicked, setClicked] = useState(false);
  const [searchContent, setSearchContent] = useState('');

  return (
    <View style={styles.Container}>
      <View style={
        clicked
          ? styles.searchBar_Clicked 
          : styles.searchhBar_unClicked}>
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput style={styles.inputBar} value={searchContent} onChangeText={setSearchContent} onFocus={() => {setClicked(true)}}/>
        {clicked && (
        <View>
          <Entypo name="cross" size={20} color="black" onPress={() => {setSearchContent('')}}/>
        </View>
        )}
      
      </View>
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
}

const styles=StyleSheet.create({
  Container: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchBar_Clicked: {
    padding: 10,
    backgroundColor: '#E2EFE3',
    width: '80%',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: "space-evenly",

  },
  searchhBar_unClicked: {
    padding: 10,
    backgroundColor: '#E2EFE3',
    borderRadius: 15,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputBar: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%'
  }
})
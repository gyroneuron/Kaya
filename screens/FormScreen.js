import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
const AgroSols = require("../assets/logo/Logo.png");

const FormScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    favoriteColor: '',
    riskAndReturn: '',
    marketVolatility: '',
    stomachLosses: '',
    investmentGoals: '',
    investmentTimeHorizon: '',
    assetClass: '',
    diversification: '',
    dividends: '',
  });

  const handleChangeText = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSelectChoice = (question, choice) => {
    setFormData(prevData => ({
      ...prevData,
      [question]: choice,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);

  };

  return (
    <View style={styles.container}>
      <Image source={AgroSols} style={{ height: 200, width: 200}} />
      <Text style={styles.title}>Form Screen</Text>


      <View style={styles.questionContainer}>
        <Text style={styles.question}>Name:</Text>
        <TextInput
          style={styles.input}
          value={formData.name}
          onChangeText={value => handleChangeText('name', value)}
        />
      </View>


      <View style={styles.quizContainer}>
        {/* Question 1 */}
        <Text style={styles.question}>How do you prioritize risk and return?</Text>
        <TouchableOpacity
          style={[styles.choiceButton, formData.riskAndReturn === 'Choice 1' && styles.selectedChoice]}
          onPress={() => handleSelectChoice('riskAndReturn', 'Choice 1')}
        >
          <Text>Choice 1: I would prioritize preserving my capital, even if it means lower returns.</Text>
        </TouchableOpacity>
    
      </View>


      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 20,
  },
  quizContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  choiceButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  selectedChoice: {
    backgroundColor: '#4461F2',
  },
  button: {
    backgroundColor: '#4461F2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FormScreen;

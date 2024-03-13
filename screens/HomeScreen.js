import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
const AgroSols = require("../assets/logo/Logo.png");


const HomeScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    age: "",
    income: "",
    investingPeriod: "",
    riskAndReturn: "",
    marketVolatility: "",
    investmentGoals: "",
    investmentTimeHorizon: "",
    assetClass: "",
    diversification: "",
    dividends: "",
    riskTolerance: "",
  });

  const handleChangeText = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSelectChoice = (key, choice) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: choice,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    navigation.navigate('Results', { formData })

  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      <ScrollView>
      
        <View style={styles.container}>
        <Image source={AgroSols} style={{ height: 200, width: 200}} />
          <Text style={styles.title}>User Form</Text>
          <View style={{ padding: 10 }}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>Age:</Text>
              <TextInput
                style={styles.input}
                value={formData.age}
                onChangeText={(value) => handleChangeText("age", value)}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>What is your annual income?</Text>
              <TextInput
                style={styles.input}
                value={formData.income}
                onChangeText={(value) => handleChangeText("income", value)}
              />
            </View>

            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                How long have you been investing?
              </Text>
              <TextInput
                style={styles.input}
                value={formData.investingPeriod}
                onChangeText={(value) =>
                  handleChangeText("investingPeriod", value)
                }
              />
            </View>
          </View>

          <View>
            <View style={{ marginVertical: "15%" }}>
              <Text style={styles.title}>Financial Risk Assessment</Text>
            </View>

            {/* Question 1 */}
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                How do you prioritize risk and return?
              </Text>

              <View style={{ padding: 10 }}>
                <TouchableOpacity
                  style={[
                    styles.choiceButton,
                    formData.riskAndReturn === "Choice 1" &&
                      styles.selectedChoice,
                  ]}
                  onPress={() =>
                    handleSelectChoice("riskAndReturn", "Choice 1")
                  }
                >
                  <Text>
                    I would prioritize preserving my capital, even if it means
                    lower returns.
                  </Text>
                </TouchableOpacity>
                {/* Choice 2 */}

                <TouchableOpacity
                  style={[
                    styles.choiceButton,
                    formData.riskAndReturn === "Choice 2" &&
                      styles.selectedChoice,
                  ]}
                  onPress={() =>
                    handleSelectChoice("riskAndReturn", "Choice 2")
                  }
                >
                  <Text>
                    I'm comfortable with some risk for potentially higher
                    returns.
                  </Text>
                </TouchableOpacity>

                {/* Choice 3 */}
                <TouchableOpacity
                  style={[
                    styles.choiceButton,
                    formData.riskAndReturn === "Choice 3" &&
                      styles.selectedChoice,
                  ]}
                  onPress={() =>
                    handleSelectChoice("riskAndReturn", "Choice 3")
                  }
                >
                  <Text>
                    I'm willing to take significant risks for the chance of high
                    returns.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Question 2 */}
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                Riding the Rollercoaster: How You Handle Investment Risk?
              </Text>

              <View style={{ padding: 10 }}>
                <TouchableOpacity
                  style={[
                    styles.choiceButton,
                    formData.riskTolerance === "Choice 1" &&
                      styles.selectedChoice,
                  ]}
                  onPress={() =>
                    handleSelectChoice("riskTolerance", "Choice 1")
                  }
                >
                  <Text>
                    Avoiding the Dips - I prioritize investments with minimal
                    risk.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.choiceButton,
                    formData.riskTolerance === "Choice 2" &&
                      styles.selectedChoice,
                  ]}
                  onPress={() =>
                    handleSelectChoice("riskTolerance", "Choice 2")
                  }
                >
                  <Text>
                    Calculated Climbs - I'm okay with some volatility for
                    potential growth.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.choiceButton,
                    formData.riskTolerance === "Choice 3" &&
                      styles.selectedChoice,
                  ]}
                  onPress={() =>
                    handleSelectChoice("riskTolerance", "Choice 3")
                  }
                >
                  <Text>
                    Thrill Seeker - I embrace risk for the chance of high
                    returns.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Question 3 */}
            <Text style={styles.question}>
              How do you handle market volatility?
            </Text>

            <View style={{ padding: 10 }}>
              {/* Choice 1 */}
              <TouchableOpacity
                style={[
                  styles.choiceButton,
                  formData.marketVolatility === "Choice 1" &&
                    styles.selectedChoice,
                ]}
                onPress={() =>
                  handleSelectChoice("marketVolatility", "Choice 1")
                }
              >
                <Text>Market fluctuations make me nervous.</Text>
              </TouchableOpacity>

              {/* Choice 2 */}
              <TouchableOpacity
                style={[
                  styles.choiceButton,
                  formData.marketVolatility === "Choice 2" &&
                    styles.selectedChoice,
                ]}
                onPress={() =>
                  handleSelectChoice("marketVolatility", "Choice 2")
                }
              >
                <Text>
                  I can handle some short-term volatility for long-term gains.
                </Text>
              </TouchableOpacity>

              {/* Choice 3 */}
              <TouchableOpacity
                style={[
                  styles.choiceButton,
                  formData.marketVolatility === "Choice 3" &&
                    styles.selectedChoice,
                ]}
                onPress={() =>
                  handleSelectChoice("marketVolatility", "Choice 3")
                }
              >
                <Text>I'm comfortable with market ups and downs.</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={{ marginVertical: "15%" }}>
              <Text style={styles.title}>Financial Goals</Text>
            </View>

            {/* Question 1 */}
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                What are your primary investment goals?
              </Text>

              <View style={{ padding: 10 }}>
                {/* Choice 1 */}
                <TouchableOpacity
                  style={[
                    styles.choiceButton,
                    formData.investmentGoals === "Choice 1" &&
                      styles.selectedChoice,
                  ]}
                  onPress={() =>
                    handleSelectChoice("investmentGoals", "Choice 1")
                  }
                >
                  <Text>Short-term savings (less than 5 years)</Text>
                </TouchableOpacity>

                {/* Choice 2 */}
                <TouchableOpacity
                  style={[
                    styles.choiceButton,
                    formData.investmentGoals === "Choice 2" &&
                      styles.selectedChoice,
                  ]}
                  onPress={() =>
                    handleSelectChoice("investmentGoals", "Choice 2")
                  }
                >
                  <Text>Long-term growth (retirement, education)</Text>
                </TouchableOpacity>

                {/* Choice 3 */}
                <TouchableOpacity
                  style={[
                    styles.choiceButton,
                    formData.investmentGoals === "Choice 3" &&
                      styles.selectedChoice,
                  ]}
                  onPress={() =>
                    handleSelectChoice("investmentGoals", "Choice 3")
                  }
                >
                  <Text>Emergency fund</Text>
                </TouchableOpacity>

                {/* Choice 4 */}
                <TouchableOpacity
                  style={[
                    styles.choiceButton,
                    formData.investmentGoals === "Choice 4" &&
                      styles.selectedChoice,
                  ]}
                  onPress={() =>
                    handleSelectChoice("investmentGoals", "Choice 4")
                  }
                >
                  <Text>Home purchase</Text>
                </TouchableOpacity>

                {/* Choice 5 */}
                <TouchableOpacity
                  style={[
                    styles.choiceButton,
                    formData.investmentGoals === "Choice 5" &&
                      styles.selectedChoice,
                  ]}
                  onPress={() =>
                    handleSelectChoice("investmentGoals", "Choice 5")
                  }
                >
                  <Text>Other</Text>
                </TouchableOpacity>
              </View>

              {/* Question 1 */}
              <View style={styles.questionContainer}>
                <Text style={styles.question}>
                  What is your investment time horizon?
                </Text>

                <View style={{ padding: 10 }}>
                  {/* Choice 1 */}
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      formData.investmentTimeHorizon === "Choice 1" &&
                        styles.selectedChoice,
                    ]}
                    onPress={() =>
                      handleSelectChoice("investmentTimeHorizon", "Choice 1")
                    }
                  >
                    <Text>Short-term (less than 3 years)</Text>
                  </TouchableOpacity>

                  {/* Choice 2 */}
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      formData.investmentTimeHorizon === "Choice 2" &&
                        styles.selectedChoice,
                    ]}
                    onPress={() =>
                      handleSelectChoice("investmentTimeHorizon", "Choice 2")
                    }
                  >
                    <Text>Medium-term (3-10 years)</Text>
                  </TouchableOpacity>

                  {/* Choice 3 */}
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      formData.investmentTimeHorizon === "Choice 3" &&
                        styles.selectedChoice,
                    ]}
                    onPress={() =>
                      handleSelectChoice("investmentTimeHorizon", "Choice 3")
                    }
                  >
                    <Text>Long-term (more than 10 years)</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View>
              <View style={{ marginVertical: "15%" }}>
                <Text style={styles.title}>Investment Knowledge</Text>
              </View>

              {/* Question 1 */}
              <View style={styles.questionContainer}>
                <Text style={styles.question}>
                  Which asset class historically offers the highest potential
                  returns, but also carries the most risk?
                </Text>

                <View style={{ padding: 10 }}>
                  {/* Choice 1 */}
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      formData.assetClass === "Choice 1" &&
                        styles.selectedChoice,
                    ]}
                    onPress={() => handleSelectChoice("assetClass", "Choice 1")}
                  >
                    <Text>Bonds</Text>
                  </TouchableOpacity>

                  {/* Choice 2 */}
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      formData.assetClass === "Choice 2" &&
                        styles.selectedChoice,
                    ]}
                    onPress={() => handleSelectChoice("assetClass", "Choice 2")}
                  >
                    <Text>Stocks</Text>
                  </TouchableOpacity>

                  {/* Choice 3 */}
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      formData.assetClass === "Choice 3" &&
                        styles.selectedChoice,
                    ]}
                    onPress={() => handleSelectChoice("assetClass", "Choice 3")}
                  >
                    <Text>Cash</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Question 2 */}
              <View style={styles.questionContainer}>
                <Text style={styles.question}>
                  Diversification is a strategy to:
                </Text>

                <View style={{ padding: 10 }}>
                  {/* Choice 1 */}
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      formData.diversification === "Choice 1" &&
                        styles.selectedChoice,
                    ]}
                    onPress={() =>
                      handleSelectChoice("diversification", "Choice 1")
                    }
                  >
                    <Text>Minimize risk</Text>
                  </TouchableOpacity>

                  {/* Choice 2 */}
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      formData.diversification === "Choice 2" &&
                        styles.selectedChoice,
                    ]}
                    onPress={() =>
                      handleSelectChoice("diversification", "Choice 2")
                    }
                  >
                    <Text>Maximize returns</Text>
                  </TouchableOpacity>

                  {/* Choice 3 */}
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      formData.diversification === "Choice 3" &&
                        styles.selectedChoice,
                    ]}
                    onPress={() =>
                      handleSelectChoice("diversification", "Choice 3")
                    }
                  >
                    <Text>Both minimize risk and maximize returns</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Question 3 */}
              <View style={styles.questionContainer}>
                <Text style={styles.question}>
                  What is the role of dividends in investing?
                </Text>

                <View style={{ padding: 10 }}>
                  {/* Choice 1 */}
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      formData.dividends === "Choice 1" &&
                        styles.selectedChoice,
                    ]}
                    onPress={() => handleSelectChoice("dividends", "Choice 1")}
                  >
                    <Text>They represent a company's debts</Text>
                  </TouchableOpacity>

                  {/* Choice 2 */}
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      formData.dividends === "Choice 2" &&
                        styles.selectedChoice,
                    ]}
                    onPress={() => handleSelectChoice("dividends", "Choice 2")}
                  >
                    <Text>They provide a share in the company's profits</Text>
                  </TouchableOpacity>

                  {/* Choice 3 */}
                  <TouchableOpacity
                    style={[
                      styles.choiceButton,
                      formData.dividends === "Choice 3" &&
                        styles.selectedChoice,
                    ]}
                    onPress={() => handleSelectChoice("dividends", "Choice 3")}
                  >
                    <Text>They have no significance in investing</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: "5%" }}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#030637",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#ffffff",
  },
  questionContainer: {
    marginBottom: 20,
  },
  choiceButton: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginVertical: 7,
  },
  selectedChoice: {
    backgroundColor: "#e2cac4"
  },

  question: {
    fontSize: 18,
    marginBottom: 5,
    color: "#e2cac4",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#e2cac4'
  },
  button: {
    backgroundColor: "#4461F2",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;

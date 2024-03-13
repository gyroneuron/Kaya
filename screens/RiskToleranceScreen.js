import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
const AgroSols = require("../assets/logo/Logo.png");

const RiskToleranceScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { formData } = route.params;

  const [riskToleranceScore, setRiskToleranceScore] = useState(0);

  useEffect(() => {
    const calculateRiskToleranceScore = () => {
      const weights = {
        age: parseInt(formData.age),
      income: parseInt(formData.income),
      investingPeriod: parseInt(formData.investingPeriod),
      riskAndReturn: {
        "Choice 1": 1,
        "Choice 2": 2,
        "Choice 3": 3,
      },
      marketVolatility: {
        "Choice 1": 1, 
        "Choice 2": 2,
        "Choice 3": 3,
      },
      riskTolerance: {
        "Choice 1": 1, 
        "Choice 2": 2,
        "Choice 3": 3,
      },
      investmentGoals: {
        "Choice 1": 1, 
        "Choice 2": 2,
        "Choice 3": 3,
        "Choice 4": 4,
        "Choice 5": 5,
      },
      investmentTimeHorizon: {
        "Choice 1": 1,
        "Choice 2": 2,
        "Choice 3": 3,
      },
      assetClass: {
        "Choice 1": 1, 
        "Choice 2": 2,
        "Choice 3": 3,
      },
      diversification: {
        "Choice 1": 1,
        "Choice 2": 2,
        "Choice 3": 3,
      },
      dividends: {
        "Choice 1": 1, 
        "Choice 2": 2,
        "Choice 3": 3,
      },
      };

      let totalWeight = 0;
      let count = 0;
      for (const key in formData) {
        if (formData.hasOwnProperty(key) && !isNaN(parseInt(formData[key]))) {
          const answer = formData[key];
          if (typeof answer === "object" && answer !== null) {
            totalWeight += weights[key][answer];
          } else {
            totalWeight += weights[key];
          }
          count++;
        }
      }

      if (count === 0) {
        setRiskToleranceScore(0);
      } else {
        setRiskToleranceScore(Math.floor(totalWeight / count));
      }
    };

    calculateRiskToleranceScore();
  }, [formData]);

  const getInvestmentOptions = () => {
    let investmentOptions = "";
    if (riskToleranceScore >= 0 && riskToleranceScore < 2) {
      investmentOptions =
        "Conservative investments such as bonds and fixed-income securities";
    } else if (riskToleranceScore >= 2 && riskToleranceScore < 4) {
      investmentOptions =
        "Balanced investments such as diversified mutual funds and ETFs";
    } else if (riskToleranceScore >= 4 && riskToleranceScore < 6) {
      investmentOptions =
        "Moderate investments balancing between risk and return";
    } else if (riskToleranceScore >= 6 && riskToleranceScore < 8) {
      investmentOptions =
        "Moderately aggressive investments with higher growth potential";
    } else {
      investmentOptions =
        "Aggressive investments such as individual stocks and growth-oriented funds";
    }
    return investmentOptions;
  };

  const animatedValue = new Animated.Value(0);
  Animated.timing(animatedValue, {
    toValue: 1,
    duration: 1000,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollView}>
      <Image source={AgroSols} style={{ height: 200, width: 200}} />
        <View style={styles.card}>
          <Text style={styles.header}>Your Risk Tolerance Score</Text>
          <Animated.View
            style={[
              styles.scoreContainer,
              { transform: [{ translateY }] },
            ]}
          >
            <Text style={styles.score}>{riskToleranceScore}</Text>
          </Animated.View>
        </View>
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsTitle}>
            Recommended Investment Options:
          </Text>
          <Text style={styles.options}>{getInvestmentOptions()}</Text>
        </View>

        <View style={{ flex: 1, justifyContent: "flex-end"}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Invest")}
          >
            <Text style={styles.buttonText}>Start Investing!</Text>
          </TouchableOpacity>
      
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030637",
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000",
  },
  scoreContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#4461F2",
    justifyContent: "center",
    alignItems: "center",
  },
  score: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ffffff",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  optionsContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
    height: '20%',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: "#4461F2",
    padding: 15,
    marginVertical: "2%",
    borderRadius: 15,
    alignItems: "center",
  },
  optionsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000000",
  },
  options: {
    fontSize: 16,
    color: "#000000",
  },
});

export default RiskToleranceScreen;

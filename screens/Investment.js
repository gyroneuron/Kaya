import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Image, Alert } from "react-native";
import { ethers } from "ethers";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";
import { TouchableOpacity } from "react-native-gesture-handler";
const AgroSols = require("../assets/logo/Logo.png");

const InvestmentScreen = () => {
  const [amount, setAmount] = useState(0);
  const [duration, setDuration] = useState("");
  const rpcUrl = "https://hackathon.shardeum.org/";
  const contractAddress = "0x82397ac40e80F373B4742e7a2E73bf8091319F09";

  const makeInvestment = async () => {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const contract = new ethers.Contract(
      contractAddress,
      ["function invest(uint256 amount, uint256 duration)"],
      provider
    );

    const amountBN = ethers.utils.parseEther(amount.toString());
    const durationBN = ethers.BigNumber.from(duration);

    const privateKey =
      "ebb73660db8182b73a67cd87a6a84f2c33297caf22c713abe384f8c6fddff417";
    const wallet = new ethers.Wallet(privateKey, provider);

    try {
      const transaction = await contract
        .connect(wallet)
        .invest(amountBN, durationBN);
      await transaction.wait();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", justifyContent: "flex-start", marginBottom: '20%'}}>
        <Image source={AgroSols} style={{ height: 200, width: 200 }} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Investment Amount (in Ether):</Text>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={0.25}
          minimumTrackTintColor="#4461F2"
          maximumTrackTintColor="#FFFFFF"
          thumbTintColor="#4461F2"
          value={amount}
          onValueChange={(value) => setAmount(value)}
        />
        <Text style={styles.value}>{amount.toFixed(2)}</Text>

        <Text style={styles.label}>Duration (in days):</Text>
        <TextInput
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
          placeholder="Enter duration"
          style={styles.input}
          placeholderTextColor="#FFFFFF"
        />
        <TouchableOpacity>
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
            Invest
          </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030637",
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputContainer: {
    padding: "5%",
    width: "90%",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#ffffff",
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#4461F2",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: "#FFFFFF",
  },
  button: {
    marginTop: 10,
    fontSize: 20,
  },
});

export default InvestmentScreen;

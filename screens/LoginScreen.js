import {
  SafeAreaView,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const backgroundImg = require("../assets/Background.jpg");
const dimension = Dimensions.get("window");
const Width = dimension.width;
const Height = dimension.height;
import LogoButton from "../components/LogoButton.js";
const google = require("../assets/logo/google.png");
const AgroSols = require("../assets/logo/Logo.png");


import { supabase } from "../lib/supabase";
import HomeScreen from "./MainScreen.js";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonName, setButtonName] = useState("Sign In");

  async function signInWithEmail() {
    setLoading(true);
    setButtonName("Singing In");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert("Wrong Credentials");
      setButtonName("Sign In");
    } else {
      setLoading(false);
      Alert.alert("SignIn Successful!");
      navigation.replace("Main");
    }
  }

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topConatiner}>
          <View
            style={{
              justifyContent: 'flex-start',
              width: Width * 0.9,
            }}
          >
            <Image source={AgroSols} style={{ height: 200, width: 200}} />
          </View>
        </View>

        <View style={styles.middleContainer}>
          <TextInput
            placeholder="Enter Email"
            style={styles.inputBox}
            onChangeText={(value) => setEmail(value)}
            blurOnSubmit={true}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="password"
            style={styles.inputBox}
            onChangeText={(value) => setPassword(value)}
            blurOnSubmit={true}
            secureTextEntry
            maxLength={18}
          />
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.recoveryBox}>
            <TouchableOpacity disabled={loading}>
              <Text style={{ color: "#C7C7C7" }}>Recover Password ?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={signInWithEmail} disabled={loading}>
            <View style={styles.buttonBox}>
              <Text style={{ color: "#ffffff", fontSize: 19 }}>
                {buttonName}
              </Text>
            </View>
          </TouchableOpacity>

          

        </View>

        <View style={styles.bottomTextContainer}>
          <Text style={{ fontSize: 16, color: '#ffffff' }}>if you don't have an account</Text>
          <Text style={{ fontSize: 16, color: '#ffffff' }}>
            you can{" "}
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ color: "#4461F2" }}> Register here! </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#030637'
  },

  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003060',
    marginBottom: 32,
  },

  topConatiner: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginVertical: 15,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputBox: {
    height: Height * 0.08,
    width: Width * 0.9,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
  },
  innerContainer: {
    justifyContent: "space-around",
    flex: 2,
  },

  recoveryBox: {
    width: Width * 0.9,
    alignItems: "flex-end",
    color: "#C7C7C7",
    fontSize: 13,
  },

  buttonBox: {
    height: Height * 0.07,
    width: Width * 0.9,
    borderRadius: 10,
    backgroundColor: "#4461F2",
    alignItems: "center",
    justifyContent: "center",
  },

  middleContainer: {
    flex: 1.7,
    alignItems: "center",
    justifyContent: "space-between",
  },

  bottomContainer: {
    flex: 1.1,
    flexDirection: "row",
    width: Width * 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

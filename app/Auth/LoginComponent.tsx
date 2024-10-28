import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import React, { SetStateAction, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "@/FirebaseContext";
import SignUp from "./SignUp";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const LoginComponent = () => {
  const [userData, setUserdata] = useState({ email: "", password: "" });
  const { setUserLogin } = useAuth();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState(true);
  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {
    setError("");
    if (userData.email.length === 0 || userData.password.length === 0) {
      Alert.alert("Missing Information", "Please enter detailed information.", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }

    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
      setUserLogin(true);
      console.log("Login successful");
    } catch (err: any) {
      setError("Invalid email or password");
      console.log(err.message);
    }
    setIsLoading(false);
  };

  return login ? (
    <View
      style={{
        width: WIDTH,
        justifyContent: "center",
        alignItems: "center",
        height: HEIGHT,
        backgroundColor: "black",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: HEIGHT * 0.03,
          fontWeight: 100,
        }}
      >
        Login
      </Text>
      <View style={{ marginTop: HEIGHT * 0.05 }}>
        <TextInput
          style={{
            color: "white",
            backgroundColor: "#3D405D",
            paddingLeft: WIDTH * 0.02,
            paddingRight: WIDTH * 0.02,
            width: WIDTH * 0.6,
            height: HEIGHT * 0.035,
            borderRadius: WIDTH * 0.1,
          }}
          placeholder="Email Address"
          placeholderTextColor="white"
          onChangeText={(text) => setUserdata({ ...userData, email: text })}
        />
      </View>
      <View style={{ marginTop: HEIGHT * 0.03 }}>
        <TextInput
          style={{
            color: "white",
            backgroundColor: "#3D405D",
            paddingLeft: WIDTH * 0.02,
            paddingRight: WIDTH * 0.02,
            width: WIDTH * 0.6,
            height: HEIGHT * 0.035,
            borderRadius: WIDTH * 0.1,
          }}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(text) => setUserdata({ ...userData, password: text })}
        />
      </View>
      <TouchableOpacity
        onPress={handleLogin}
        style={{
          width: Dimensions.get("window").width * 0.25,
          backgroundColor: "white",
          borderRadius: 25,
          paddingVertical: 10,
          paddingHorizontal: 20,
          alignItems: "center",
          marginTop: HEIGHT * 0.03,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="black" />
        ) : (
          <Text style={{ color: "black", fontWeight: "bold" }}>Login</Text>
        )}
      </TouchableOpacity>
      {/* <View style={styles.container}>
        <View style={styles.line} />
        <Text style={styles.text}>OR</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.containerLoginButton}>
        <TouchableOpacity style={styles.loginWithGoogleBox}>
          <Image
            source={{
              uri: "https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-logo-vector-png-image_9183290.png",
            }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.signInText}>Sign In With Google</Text>
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          position: "absolute",
          bottom: "5%",
          width: Dimensions.get("window").width * 0.25,
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setLogin(false);
          }}
        >
          <Text style={{ color: "white", textDecorationColor: "underline" }}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <SignUp setLogin={setLogin} />
  );
};

export default LoginComponent;
const styles = StyleSheet.create({
  container: {
    marginTop: HEIGHT * 0.05,
    width: WIDTH * 0.6,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10, // Adjust the margin as needed
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "white", // Line color
  },
  text: {
    color: "white",
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "100",
  },

  containerLoginButton: {
    marginTop: HEIGHT * 0.03,
    borderRadius: WIDTH * 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  loginWithGoogleBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: WIDTH * 0.05,
    paddingVertical: HEIGHT * 0.005,
    borderColor: "#ccc",
    borderRadius: WIDTH * 0.1,
    backgroundColor: "#f9f9f9",
  },
  signInText: {
    marginRight: 10, // Space between text and image
    fontSize: 16,
    fontWeight: "300",
  },
  image: {
    width: 30,
    height: 30,
    marginRight: WIDTH * 0.01,
  },
});

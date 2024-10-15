import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

interface SignUpProps {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({ setLogin }) => {
  const [registerStep, setRegisterStep] = useState(1);
  const handleRegister = () => {};

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "40%",
        backgroundColor: "black",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: Dimensions.get("window").height * 0.03,
          fontWeight: "100",
        }}
      >
        Register
      </Text>
      <View style={{ marginTop: Dimensions.get("window").height * 0.02 }}>
        <TextInput
          style={{
            color: "white",
            backgroundColor: "#3D405D",
            paddingLeft: Dimensions.get("window").width * 0.02,
            paddingRight: Dimensions.get("window").width * 0.02,
            width: Dimensions.get("window").width * 0.5,
            height: Dimensions.get("window").height * 0.035,
            borderRadius: Dimensions.get("window").width * 0.1,
          }}
          placeholder="Email Address"
          placeholderTextColor="white"
        />
      </View>
      <View style={{ marginTop: Dimensions.get("window").height * 0.01 }}>
        <TextInput
          style={{
            color: "white",
            backgroundColor: "#3D405D",
            paddingLeft: Dimensions.get("window").width * 0.02,
            paddingRight: Dimensions.get("window").width * 0.02,
            width: Dimensions.get("window").width * 0.5,
            height: Dimensions.get("window").height * 0.035,
            borderRadius: Dimensions.get("window").width * 0.1,
          }}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
        />
      </View>
      <View style={{ marginTop: Dimensions.get("window").height * 0.01 }}>
        <TextInput
          style={{
            color: "white",
            backgroundColor: "#3D405D",
            paddingLeft: Dimensions.get("window").width * 0.02,
            paddingRight: Dimensions.get("window").width * 0.02,
            width: Dimensions.get("window").width * 0.5,
            height: Dimensions.get("window").height * 0.035,
            borderRadius: Dimensions.get("window").width * 0.1,
          }}
          placeholder="Confirm Password"
          placeholderTextColor="white"
        />
      </View>

      <TouchableOpacity
        onPress={handleRegister}
        style={{
          width: Dimensions.get("window").width * 0.25,
          backgroundColor: "white",
          borderRadius: 25,
          paddingVertical: 10,
          paddingHorizontal: 20,
          alignItems: "center",
          marginTop: Dimensions.get("window").height * 0.05,
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold" }}>Register</Text>
      </TouchableOpacity>
      <View
        style={{
          width: Dimensions.get("window").width * 0.25,
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setLogin(true);
          }}
        >
          <Text style={{ color: "white", textDecorationLine: "underline" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

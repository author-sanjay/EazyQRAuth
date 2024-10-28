import { useAuth } from "@/app/Context/AuthContext";
import { FIREBASE_AUTH } from "@/FirebaseContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Alert,
  StyleSheet,
  Image,
} from "react-native";


interface SignUpProps {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const SignUp: React.FC<SignUpProps> = ({ setLogin }) => {
  const auth = FIREBASE_AUTH;
  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setUserLogin } = useAuth();



  const handleRegister = async () => {
    if (userObject.email.length === 0 || userObject.password.length === 0) {
      setError("Email and password are required.");
      return;
    }
    if (userObject.password !== userObject.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const response = await createUserWithEmailAndPassword(
        auth,
        userObject.email,
        userObject.password
      );
      setUserLogin(response.user);
      setLoading(false);
      Alert.alert("Success", "Registration successful!");
    } catch (error) {
      setLoading(false);
      setError("Failed to register. Try again.");
    }
  };


  return (
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
          fontWeight: "100",
        }}
      >
        Register
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
          onChangeText={(text) =>
            setUserObject((prev) => ({ ...prev, email: text }))
          }
          value={userObject.email}
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
          onChangeText={(text) =>
            setUserObject((prev) => ({ ...prev, password: text }))
          }
          value={userObject.password}
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
          placeholder="Confirm Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(text) =>
            setUserObject((prev) => ({ ...prev, confirmPassword: text }))
          }
          value={userObject.confirmPassword}
        />
      </View>

      <TouchableOpacity
        onPress={handleRegister}
        style={{
          width: WIDTH * 0.25,
          backgroundColor: "white",
          borderRadius: 25,
          paddingVertical: 10,
          paddingHorizontal: 20,
          alignItems: "center",
          marginTop: HEIGHT * 0.05,
          opacity: loading ? 0.5 : 1,
        }}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="black" />
        ) : (
          <Text style={{ color: "black", fontWeight: "bold" }}>Register</Text>
        )}
      </TouchableOpacity>
      {/* <View style={styles.container}>
        <View style={styles.line} />
        <Text style={styles.text}>OR</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.containerLoginButton}>
        <TouchableOpacity
          style={styles.loginWithGoogleBox}
          onPress={onGoogleSignIn}
        >
          <Image
            source={{
              uri: "https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-logo-vector-png-image_9183290.png",
            }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.signInText}>Register With Google</Text>
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

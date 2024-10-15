import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Animated,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import SignUp from "./SignUp";

const images = [
  {
    image: "https://images.pexels.com/photos/2451622/pexels-photo-2451622.jpeg",
    text: "Skip the Queue",
  },
  {
    image: "https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg",
    text: "No Boring Login Forms",
  },
  {
    image: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg",
    text: "Just Scan QR and Done",
  },
  {
    image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    text: "High Level Security Protection",
  },
  {
    image: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg",
    text: "Save Login Credentials and then forget...",
  },
];

const Login = () => {
  const width = Dimensions.get("window").width;
  const [login, setLogin] = useState(true);
  const scaleValue = useRef(new Animated.Value(1)).current; // Create an animated value


  const handleLogin = () => {
    // Add your login logic here
    console.log("Login button pressed");
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Carousel
          loop
          width={width}
          height={Dimensions.get("window").height * 0.6}
          autoPlay={true}
          data={images}
          scrollAnimationDuration={3000}
          renderItem={({ index }) => (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: images[index].image }}
                style={styles.image}
              />
              <Text style={styles.textOverlay}>{images[index].text}</Text>
            </View>
          )}
        />
      </View>
      {login ? (
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
              fontWeight: 100,
            }}
          >
            Login
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
            <TouchableOpacity
              onPress={handleLogin}
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
              <Text style={{ color: "black", fontWeight: "bold" }}>Login</Text>
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
                  setLogin(false);
                }}
              >
                <Text
                  style={{ color: "white", textDecorationColor: "underline" }}
                >
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
        </View>
      ) : (
        <>
         <SignUp setLogin={setLogin}/>
        </>
      )}
    </SafeAreaProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: "60%",
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textOverlay: {
    position: "absolute",
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1.5,
    bottom: 30,
    alignSelf: "center",
    fontStyle: "italic",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
    fontFamily: "monospace",
  },
});

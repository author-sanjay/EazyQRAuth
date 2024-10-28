import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import { useAuth } from "@/app/Context/AuthContext";
import LoginComponent from "./LoginComponent";
import InfoGraphic from "./InfoGraphic";

const Login = () => {
  const { setUserLogin } = useAuth();

  const [login, setLogin] = useState(false);

  return (
    <SafeAreaProvider>
      {!login ? <InfoGraphic setLogin={setLogin} /> : <LoginComponent />}
    </SafeAreaProvider>
  );
};

export default Login;

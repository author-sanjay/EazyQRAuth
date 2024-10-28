import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "./Context/AuthContext";
import Login from "./Auth/Login";
import Home from "./Home/Home";

const App = () => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <Login /> : <Home />;
};

export default App;

const styles = StyleSheet.create({});

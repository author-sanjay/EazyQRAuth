import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "./Context/AuthContext";
import Login from "./Auth/Login/Login";

const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    !isAuthenticated?<Login/>:
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

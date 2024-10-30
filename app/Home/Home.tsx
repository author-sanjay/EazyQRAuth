import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import BottomNav from "./BottomNav";
const Home = () => {
  const [selectedNav, setSelectedNav] = useState("Home");
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView>
      <View
        style={{
          height: screenHeight,
          width: screenWidth,
          backgroundColor: "#353535",
        }}
      >
        <BottomNav selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

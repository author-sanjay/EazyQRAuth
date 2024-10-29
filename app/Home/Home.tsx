import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BottomNav from "./BottomNav";
const Home = () => {
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
        <BottomNav/>
      </View>
    </SafeAreaView>
  );
};

export default Home;

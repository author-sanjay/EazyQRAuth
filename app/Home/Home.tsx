import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import BottomNav from "./BottomNav";
import QRList from "./QRList";
const Home = () => {
  const [selectedNav, setSelectedNav] = useState("QRCode");
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
        {selectedNav === "QRCode" ? <QRList /> : <></>}
        <BottomNav selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

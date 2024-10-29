import React from "react";
import { Dimensions, Text, View } from "react-native";
import {
    Code,
  House,
  QrCode,
  ScanLineIcon,
  Settings,
  User,
} from "lucide-react-native";
const BottomNav = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        zIndex: 10,
        width: screenWidth,
        height: screenHeight * 0.06,
        backgroundColor: "black",
        paddingHorizontal: screenHeight * 0.05,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopLeftRadius: screenHeight * 0.03,
        borderTopRightRadius: screenHeight * 0.03,
      }}
    >
      <Text>
        <House color="white" size={screenHeight * 0.025} />;
      </Text>
      <Text>
        <QrCode color="white" size={screenHeight * 0.025} />;
      </Text>
      <Text>
        <ScanLineIcon color="white" size={screenHeight * 0.025} />;
      </Text>
      <Text>
        <Code color="white" size={screenHeight * 0.025} />;
      </Text>
      <Text>
        <User color="white" size={screenHeight * 0.025} />;
      </Text>
    </View>
  );
};

export default BottomNav;

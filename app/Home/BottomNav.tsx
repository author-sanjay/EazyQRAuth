import React, { useEffect, useRef, SetStateAction } from "react";
import {
  Animated,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Code, House, QrCode, ScanLineIcon, User } from "lucide-react-native";

interface BottomNavProps {
  selectedNav: string;
  setSelectedNav: React.Dispatch<SetStateAction<string>>;
}

const BottomNav: React.FC<BottomNavProps> = ({
  selectedNav,
  setSelectedNav,
}) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const backgroundAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(backgroundAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [selectedNav]);

  const renderNavItem = (navKey: string, IconComponent: any, label: string) => {
    const isSelected = selectedNav === navKey;

    const backgroundColor = isSelected ? "white" : "black";

    const textColor = isSelected ? "black" : "white";
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedNav(navKey);
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: backgroundColor,
          borderRadius: screenWidth * 0.03,
          paddingHorizontal: screenWidth * 0.02,
          paddingVertical: screenHeight * 0.006,
        }}
      >
        <IconComponent color={textColor} size={screenHeight * 0.025} />
        {isSelected && (
          <Animated.Text
            style={{
              color: textColor,
              marginLeft: screenWidth * 0.01,
              fontSize: screenHeight * 0.012,
              opacity: backgroundAnim,
            }}
          >
            {label}
          </Animated.Text>
        )}
      </TouchableOpacity>
    );
  };

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
      {renderNavItem("QRCode", QrCode, "Your Auth")}
      {renderNavItem("ScanQR", ScanLineIcon, "Scan & Save")}
      {renderNavItem("Profile", User, "Profile")}
    </View>
  );
};

export default BottomNav;

import { View, Text, Dimensions, ScrollView } from "react-native";
import React from "react";
import SinglQRListItem from "./SinglQRListItem";

const QRList = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: "90%",
          width: "80%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
              fontSize: screenHeight * 0.03,
              fontWeight: "200",
            }}
          >
            Your Credentials
          </Text>
        </View>
        <ScrollView
          style={{ flex: 1, marginTop: "3%", marginBottom: "8%" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
        >
          <SinglQRListItem  />
        </ScrollView>
      </View>
    </View>
  );
};

export default QRList;

import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Icons from "react-native-vector-icons/EvilIcons";
const Home = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView>
      <View
        style={{
          width: screenWidth,
          height: screenHeight,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#2b2a2a",
        }}
      >
        <View
          style={{
            height: screenHeight * 0.075,
            width: screenWidth,
            borderBottomColor: "white",
            borderWidth: 1,
            borderBottomLeftRadius: screenWidth * 0.05,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            borderBottomRightRadius: screenWidth * 0.05,
            paddingHorizontal: screenWidth * 0.04,
          }}
        >
          <View>
            <TouchableOpacity>
              <Icons name="navicon" size={screenHeight * 0.03} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: "white" }}>Home</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Icons name="plus" size={screenHeight * 0.03} color="white" />
            </TouchableOpacity>

          </View>
        </View>
        <View>
          <Text>Body</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

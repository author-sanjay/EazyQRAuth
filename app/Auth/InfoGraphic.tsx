import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { SetStateAction, useEffect, useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import LottieView from "lottie-react-native"; // Import Lottie
import eazyLoginImg from "../Assets/Animation1.json";
import qrScan from "../Assets/Scan QR.json";
import skipLogins from "../Assets/Login Form.json";

const images = [
  {
    animation: qrScan, // Lottie animation file
    text: "Just Scan QR and Done",
  },
  {
    animation: skipLogins, // Lottie animation file
    text: "Skip Traditional Complicated Logins",
  },
  {
    animation: eazyLoginImg, // Lottie animation file
    text: "Authentication Made Eazy",
  },
];

interface InfoGraphicProps {
  setLogin: React.Dispatch<SetStateAction<boolean>>;
}

const InfoGraphic: React.FC<InfoGraphicProps> = ({ setLogin }) => {
  const width = Dimensions.get("window").width;
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(false); // Track when to show button

  useEffect(() => {
    if (index === images.length - 1) {
      const timer = setTimeout(() => {
        setShowButton(true); // Show button when last slide is reached
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowButton(false); // Reset button visibility if not on last slide
    }
  }, [index]);

  return (
    <View
      style={{
        height: Dimensions.get("window").height,
        width: width,
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Carousel
        loop={false}
        width={width}
        height={Dimensions.get("window").height}
        autoPlay={true}
        autoPlayInterval={3000}
        data={images}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setIndex(index)}
        renderItem={({ index }) => (
          <View
            style={{
              width: width,
              height: Dimensions.get("window").height * 0.9,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Lottie Animation */}
            <LottieView
              source={images[index].animation}
              autoPlay
              loop={true}
              style={{ width: "80%", height: "70%" }}
            />

            <Text
              style={{
                color: "white",
                fontSize: width * 0.04,
                fontWeight: "100",
                textAlign: "center",
              }}
            >
              {images[index].text}
            </Text>

            {/* Show button only when the animation is done */}
            {showButton && (
              <TouchableOpacity
                style={{
                  marginTop: Dimensions.get("window").height * 0.1,
                  backgroundColor: "white",
                  borderRadius: 25,
                }}
                onPress={() => {
                  setLogin(true);
                }}
              >
                <Text
                  style={{
                    fontSize: width * 0.03,
                    fontWeight: "100",
                    color: "black",
                    paddingVertical: width * 0.01,
                    paddingHorizontal: width * 0.08,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default InfoGraphic;

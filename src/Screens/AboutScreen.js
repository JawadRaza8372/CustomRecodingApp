import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { w, h } from "react-native-responsiveness";

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.HomeScreendiv}>
      {/* screen header is a custom component for header in app */}
      <ScreenHeader
        title="About"
        onPressFun={() => {
          navigation.toggleDrawer();
        }}
      />
      <View style={styles.otherContainer}>
        <Text style={styles.textStyle}>About me page</Text>
      </View>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: h("4%"),
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: h("1%"),
  },
  HomeScreendiv: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  otherContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "brown",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { w, h } from "react-native-responsiveness";
import { Entypo } from "@expo/vector-icons";

const ScreenHeader = ({ title, onPressFun }) => {
  return (
    <View style={styles.screenHeader}>
      <View style={styles.backButtonCont}>
        <TouchableOpacity
          style={styles.backbutton}
          onPress={() => {
            onPressFun();
          }}
        >
          <Entypo name="menu" size={h("5%")} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.screenHeadCont}>
        <Text style={styles.screenTitle}>{title}</Text>
      </View>
      <View style={styles.avatrCont} />
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  screenHeader: {
    width: "100%",
    height: h("7%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: "brown",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "white",
  },
  backButtonCont: {
    width: "20%",
    height: "100%",
  },
  avtarImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  screenHeadCont: {
    width: "60%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatrCont: {
    width: "20%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  customAvtar: {
    width: h("5%"),
    height: h("5%"),
    borderRadius: h("7%"),
    borderWidth: 1,
    color: "white",
    overflow: "hidden",
  },
  backbutton: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  screenTitle: {
    fontSize: h("3.3%"),
    fontWeight: "900",
    color: "white",
    textTransform: "capitalize",
  },
});

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import ScreenHeader from "../Components/ScreenHeader";
import { Audio } from "expo-av";
import { Feather } from "@expo/vector-icons";
import { w, h } from "react-native-responsiveness";
const HomeScreen = ({ navigation }) => {
  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const [message, setMessage] = useState("");

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        setMessage("Recording");

        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }
  async function stopRecording() {
    setRecording(undefined);
    setMessage("");
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });

    setRecordings(updatedRecordings);
  }
  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  return (
    <View style={styles.HomeScreendiv}>
      {/* screen header is a custom component for header in app */}
      <ScreenHeader
        title="home"
        onPressFun={() => {
          navigation.toggleDrawer();
        }}
      />
      <View style={styles.otherContainer}>
        <Text style={styles.textStyle}>{message}</Text>
        <TouchableOpacity
          style={styles.ButtonMy}
          onPress={recording ? stopRecording : startRecording}
        >
          {recording ? (
            <Feather name="stop-circle" size={w("20%")} color="white" />
          ) : (
            <Feather name="mic" size={w("20%")} color="white" />
          )}
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.recordingsView}>
          {recordings.length > 0 &&
            recordings.map((recordingLine, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.fill}>
                  Recording {index + 1} - {recordingLine.duration}
                </Text>
                <Button
                  style={styles.button}
                  onPress={() => recordingLine.sound.replayAsync()}
                  title="Play"
                ></Button>
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  HomeScreendiv: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  otherContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "brown",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    flex: 1,
    margin: 16,
  },
  button: {
    margin: 16,
  },
  textStyle: {
    fontSize: h("4%"),
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: h("1%"),
  },
  ButtonMy: {
    width: w("30%"),
    height: w("30%"),
    borderRadius: w("30%"),
    backgroundColor: "rgba(255,255,255,0.4)",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  recordingsView: {
    width: "100%",
    flex: 1,
    paddingVertical: h("5%"),
  },
});

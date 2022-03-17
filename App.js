import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppNavigation from "./src/AppNavigation/AppNavigation";

export default function App() {
  return (
    <>
      <StatusBar />
      <AppNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

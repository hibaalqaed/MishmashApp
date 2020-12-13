import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import Home from "./components/Home";
import BranchList from "./components/BranchList";
import BranchDetail from "./components/BranchDetail";

// Styling
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "white",
    orange: "orangered",
    red: "#ff3232",
  },
  dark: {
    mainColor: "white",
    backgroundColor: "#242424",
    orange: "orangered",
    red: "#ff3232",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme.light}>
        {/* <Home /> */}
        {/* <BranchList /> */}
        <BranchDetail />
      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
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

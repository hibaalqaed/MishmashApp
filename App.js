import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/navigation";

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
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

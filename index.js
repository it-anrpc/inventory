import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/routes/MainStackNavigator";
// import { WebView } from "react-native-webview";

function App() {
  return (
    // <WebView source={{ uri: "reactnative.dev" }} />
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);

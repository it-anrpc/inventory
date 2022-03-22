import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";
import AppHeader from "../../../components/header";
import cache from "../../../shared/cache";
import LayoutManager from "./layoutManager";

export default function MainPrintPageView({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainView}>
        <LayoutManager navigation={navigation} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

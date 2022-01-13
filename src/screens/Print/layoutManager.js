import React, { useState } from "react";
import {
  StyleSheet,
  VirtualizedList,
  ScrollView,
  SafeAreaView,
  View,
  ImageBackground,
  Button,
  Text,
} from "react-native";
import AppHeader from "../../components/header";
import cache from "../../shared/cache";
import MainPrintPageView from "./screen/MainPage/mainPrintPageView";

export default function LayoutManager({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AppHeader title={"طباعة"} />
      </View>
      <View style={styles.mainView}>
        <MainPrintPageView />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
  },
  mainView: {
    flex: 6,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

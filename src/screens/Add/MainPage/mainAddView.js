import React from "react";
import LayoutManager from "./layoutManager";
import AppHeader from "../../../components/header";
import { SafeAreaView, StyleSheet, View } from "react-native";
import cache from "../../../shared/cache";
export default function MainAddView({ navigation }) {
  return (
    <SafeAreaView style={styles.mainView}>
        <LayoutManager
          navigation={navigation}
          fyear={cache.get("Fyear")}
          edafaNumber={cache.get("edafaNumbers")}
        />
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

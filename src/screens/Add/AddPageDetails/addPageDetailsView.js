import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";
import AppHeader from "../../../components/header";
import LayoutManager from "./layoutManager";

export default function AddPageDetailsView({ route,navigation }) {
  
  const {fyear,edafaNumber,data} = route.params

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainView}>
        <LayoutManager navigation={navigation} fyear={fyear.name} edafaNumber={edafaNumber.name} data={data} />
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

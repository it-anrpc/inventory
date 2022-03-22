import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";
import AppHeader from "../../../components/header";
import LayoutManager from "./layoutManager";

export default function SarfPageDetailsView({ route,navigation }) {
  
  const {fyear,sarfNumber,data} = route.params

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainView}>
        <LayoutManager navigation={navigation} fyear={fyear.name} sarfNumber={sarfNumber.name} data={data} />
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

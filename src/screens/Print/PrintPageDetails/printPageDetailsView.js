import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";
import AppHeader from "../../../components/header";
import cache from "../../../shared/cache";
import LayoutManager from "./layoutManager";

export default function PrintPageDetailsView({ route,navigation }) {
  
  const {fyear,edafaNumber,data} = route.params

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
        <LayoutManager navigation={navigation} fyear={fyear.name} edafaNumber={edafaNumber.name} data={data} />
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

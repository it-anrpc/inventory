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
import { HomeViewGenerator } from "./components/homeViewGenerator";

const assetsDir = "./assets/";
const homeButtons = [
  [
    {
      id: 0,
      title: "طباعة",
      img: require(assetsDir + "print.png"),
      path: "PrintView",
      image_ratio: { aspectRatio: 2 },
    },
    {
      id: 1,
      title: "إضافة",
      img: require(assetsDir + "add.png"),
      path: "AddView",
      image_ratio: { aspectRatio: 2 },
    },
  ],
  [
    {
      id: 2,
      title: "صرف",
      img: require(assetsDir + "dispatch.png"),
      path: "DispatchView",
      image_ratio: { aspectRatio: 2 },
    },
    {
      id: 3,
      title: "الجرد",
      img: require(assetsDir + "inventory.png"),
      path: "InventoryView",
      image_ratio: { aspectRatio: 2 },
    },
  ],
  [
    {
      id: 4,
      title: "استعلام",
      img: require(assetsDir + "search.png"),
      path: "search",
      image_ratio: { aspectRatio: 2 },
    },
    {
      id: 5,
      title: "إعدادات",
      img: require(assetsDir + "setting.png"),
      path: "setting",
      image_ratio: { aspectRatio: 1 },
    },
  ],
];

export default function LayoutManager({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainView}>
        <HomeViewGenerator buttonArgs={homeButtons} navigation={navigation} />
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
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

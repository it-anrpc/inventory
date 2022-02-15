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
      path: "inventory",
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AppHeader title={"القائمة الرئيسية"}/>
      </View>

      <View style={styles.mainView}>
        <HomeViewGenerator buttonArgs={homeButtons} navigation={navigation} />
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
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  cardsView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "baseline",
  },

  card: {
    flex: 1,
    height: 150,
    alignItems: "flex-start",
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    opacity: 0.8,
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  spaceBetween: {
    margin: 2,
    color: "black",
  },
});

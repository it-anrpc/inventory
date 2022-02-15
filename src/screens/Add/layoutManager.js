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
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import DropDownList from "../../components/DropDownList/dropDownList";

let fyear = [
  { id: 1, name: "2021_2022" },
  { id: 2, name: "2022_2023" },
];

let edafaNumber = [
  { id: 1, name: "1" },
  { id: 2, name: "11" },
  { id: 3, name: "15" },
  { id: 4, name: "16" },
];

export default function LayoutManager({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{flex:1,alignSelf:"stretch",backgroundColor:"white"}}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          backgroundColor: "white",
          marginTop: 10,
          marginBottom: 2,
        }}
      >
        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: "#0078B5", fontSize: 22, fontWeight: "bold" }}>
            {"سنة مالية"}
          </Text>
        </View>
        <DropDownList data={fyear} />

        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: "#0078B5", fontSize: 22, fontWeight: "bold" }}>
            {"رقم الإضافة المخزنية"}
          </Text>
        </View>
        <DropDownList data={edafaNumber} />

        <TouchableOpacity
          style={{
            backgroundColor: "#0078B5",
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {"التالي"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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

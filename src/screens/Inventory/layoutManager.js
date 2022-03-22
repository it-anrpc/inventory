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
import DropDownList from "../../components/DropDownList/dropDownList";
import cache from "../../shared/cache";
import SubView from "./components/subView";

export default function LayoutManager({ navigation, gardTypes }) {
  const [selectedGardType, setSelectedGardType] = useState(null);
  const [dropDownViewState, setDropDownViewState] = useState("flex");

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.selectionContainer}>
        <View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.title}>{"نوع الجرد"}</Text>
          </View>

          <DropDownList
            data={gardTypes}
            onSelect={(item) => {
              setSelectedGardType(item);
            }}
            selectedItem={selectedGardType}
          />
        </View>
      </View>
      <View style={[styles.subViewContainer, { display: dropDownViewState }]}>
        <SubView gardType={selectedGardType} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "stretch",
  },
  selectionContainer: {
    flex: 1,
    maxHeight: 120,
    alignSelf: "stretch",
    zIndex: 100,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  subViewContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#0078B5",
    fontSize: 22,
    fontWeight: "bold",
  },
});

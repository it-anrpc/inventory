import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import DropDownList from "../../../components/DropDownList/dropDownList";
import cache from "../../../shared/cache";

const PrintOldView = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
    <View style={styles.mainPart}></View>
    <View style={styles.buttonPart}></View>
  </View>
);

const PrintNewView = ({ navigation, fyear, edafaNumber }) => {
  const [selectedFyear, setSelectedFyear] = useState(null);
  const [selectedEdafa, setSelectedEdafa] = useState(null);

  const goToPrintDetails = () => {
    if (selectedEdafa === null || selectedFyear === null) {
      alert("لايمكن ترك رقم الاضافة او السنة المالية فارغة");
      return;
    }

    navigation.navigate("PrintDetailsView", {
      fyear: selectedFyear,
      edafaNumber: selectedEdafa,
      data: cache.get("edafat")[selectedFyear.name][selectedEdafa.name],
    });
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "white",
        paddingTop: 10,
        marginBottom: 2,
      }}
    >
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: "#0078B5", fontSize: 22, fontWeight: "bold" }}>
          {"سنة مالية"}
        </Text>
      </View>
      <DropDownList
        data={fyear}
        onSelect={(item) => {
          setSelectedFyear(item);
        }}
        selectedItem={selectedFyear}
      />

      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: "#0078B5", fontSize: 22, fontWeight: "bold" }}>
          {"رقم الإضافة المخزنية"}
        </Text>
      </View>
      <DropDownList
        data={edafaNumber}
        onSelect={(item) => {
          setSelectedEdafa(item);
        }}
        selectedItem={selectedEdafa}
      />

      <TouchableOpacity
        onPress={goToPrintDetails}
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
  );
};

export default function LayoutManager({ navigation }) {
  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {});
  //   return unsubscribe;
  // }, [navigation]);
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: "oldPrint", title: "قديم" },
    { key: "newPrint", title: "جديد" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "oldPrint":
        return <PrintOldView navigation={navigation} />;
      case "newPrint":
        return (
          <PrintNewView
            navigation={navigation}
            fyear={cache.get("Fyear")}
            edafaNumber={cache.get("edafaNumbers")}
          />
        );
      default:
        return null;
    }
  };

  return (
    <TabView
      tabStyle={{ backgroundColor: "green" }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={(props) => (
        <TabBar
          renderLabel={({ route, focused, color }) => (
            <Text
              style={{
                color: focused ? "#0275d8" : "#6c757d",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 1,
              }}
            >
              {route.title}
            </Text>
          )}
          indicatorStyle={{ backgroundColor: "#0275d8" }}
          style={{ backgroundColor: "white" }}
          {...props}
        />
      )}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
const styles = StyleSheet.create({
  mainPart: {
    flex: 2,
    alignItems: "center",
    alignSelf: "stretch",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  buttonPart: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
  },

  card: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    opacity: 0.8,
  },

  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },

  dropDownPart: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
  },

  titlePart: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    alignSelf: "stretch",
    padding: 5,
  },

  selectionPart: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    padding: 5,
  },
});

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
} from "react-native";

import { TabView, SceneMap, TabBar } from "react-native-tab-view";


const PrintOldView = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
    <View style={styles.mainPart}></View>
    <View style={styles.buttonPart}></View>
  </View>
);


const PrintNewView = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.mainPart}>
        <View style={[styles.card, styles.cardShadow]}>
          
        </View>
      </View>
      <View style={styles.buttonPart}></View>
    </View>
  );
};

const renderScene = SceneMap({
  oldPrint: PrintOldView,
  newPrint: PrintNewView,
});

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
    flex: 3,
    alignItems: "center",
    alignSelf: "stretch",
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  buttonPart: {
    flex: 2,
    backgroundColor: "blue",
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
});

// <View style={styles.radioBtnPart}>
// <Text>{"جديد"}</Text>
// </View>

// <View style={styles.radioBtnPart}>
// <Text>{"جديد"}</Text>
// </View>

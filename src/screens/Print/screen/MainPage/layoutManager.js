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

export default function LayoutManager({ navigation }) {
  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {});
  //   return unsubscribe;
  // }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.selectionPart}>
    
      </View>
      <View style={styles.mainPart}></View>
      <View style={styles.buttonPart}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "stretch",
  },
  selectionPart: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    alignSelf: "stretch",
  },
  mainPart: {
    flex: 3,
    backgroundColor: "orange",
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttonPart: {
    flex: 2,
    backgroundColor: "blue",
    alignItems: "center",
    alignSelf: "stretch",
  },
  radioBtnPart: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

// <View style={styles.radioBtnPart}>
// <Text>{"جديد"}</Text>
// </View>

// <View style={styles.radioBtnPart}>
// <Text>{"جديد"}</Text>
// </View>

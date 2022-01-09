import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import cache from "../shared/cache";

export default function AppHeader(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.font}> {props.title} </Text>
      <View style={styles.rightSpace}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#0078B5",
  },
  rightSpace: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch"
  },
  font: {
    flex: 1,
    paddingRight: 15,
    alignSelf: "stretch",
    textAlignVertical: "center",
    textAlign: "right",
    fontSize: 29,
    color: "white",
  },
});

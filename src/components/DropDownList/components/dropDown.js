import { gray } from "color-name";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function DropDown({ openDropDown }) {
  return (
    <TouchableOpacity
      onPress={openDropDown}
      style={styles.dropDownContainer}
    >
      <View
        style={{
          flex: 5,
          alignItems: "flex-start",
          justifyContent: "center",
          alignSelf: "stretch",
          paddingLeft: 15,
        }}
      >
        <Text style={{ fontSize: 19, color: "#abaab1" }}>Select</Text>
      </View>
      <View
        style={{
          flex: 1,
          maxWidth: 50,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "stretch",
        }}
      >
        <Icon name={"caret-down"} size={15} color={"#abaab1"} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  dropDownContainer: {
    flex: 1,
    maxHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#c8c8c8",
  },
});

import { gray } from "color-name";
import { set } from "lodash";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import DropDown from "./components/dropDown";

export default function LayoutManager({ navigation, props }) {
  const [show, setShow] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: "center", alignSelf: "stretch" }}>
      <DropDown
        openDropDown={() => {
          setShow(1);
        }}
      />
      {show ? (
        <View
          style={{
            flex:1,
            alignItems: "center",
            alignSelf: "stretch",
            zIndex:1,
          }}
        >
        </View>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
});

// <View style={styles.radioBtnPart}>
// <Text>{"جديد"}</Text>
// </View>

// <View style={styles.radioBtnPart}>
// <Text>{"جديد"}</Text>
// </View>

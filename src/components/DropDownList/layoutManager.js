import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function LayoutManager({
  data = [],
  value = {},
  onSelect = () => {},
  onDropDownPressed = (state) => {},
}) {
  const [showOption, setShowOption] = useState(false);

  const onSelectedItem = (val) => {
    setShowOption(false);
    onSelect(val);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TouchableOpacity
        style={styles.dropDownStyle}
        onPress={() => {
          onDropDownPressed(!showOption);
          setShowOption(!showOption);
        }}
      >
        <Text style={{ color: "black", fontSize: 18 }}>
          {value ? value.name : ""}
        </Text>
        <Icon
          name={showOption == false ? "caret-down" : "caret-up"}
          size={18}
          color={"#c0c0c0"}
        />
      </TouchableOpacity>
      {showOption && (
        <View
          style={{
            ...styles.cardShadow,
            backgroundColor: "white",
            padding: 2,
            borderRadius: 6,
            maxHeight: 170,
            marginBottom: data.length >= 4 ? 120 : 0,
          }}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {data.map((val, i) => {
              return (
                <TouchableOpacity
                  key={String(i)}
                  onPress={() => {
                    onSelectedItem(val);
                  }}
                  style={{
                    ...styles.selectedStyle,
                    backgroundColor: value
                      ? value.id == val.id
                        ? "#468ee7"
                        : "white"
                      : "white",
                  }}
                >
                  <Text style={{ color: "black", fontSize: 16 }}>
                    {val.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownStyle: {
    padding: 8,
    borderWidth: 1.5,
    borderColor: "#e4e4e4",
    borderRadius: 6,
    minHeight: 42,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  selectedStyle: {
    paddingVertical: 8,
    borderRadius: 4,
    paddingHorizontal: 6,
    marginBottom: 4,
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

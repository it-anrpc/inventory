import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DropDownList from "../../../components/DropDownList/dropDownList";
import cache from "../../../shared/cache";

export default function LayoutManager({ navigation, fyear, edafaNumber }) {
  const [selectedFyear, setSelectedFyear] = useState(null);
  const [selectedEdafa, setSelectedEdafa] = useState(null);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [navigation]);

  const goToAddDetails = () => {
    if (selectedEdafa === null || selectedFyear === null) {
      alert("لايمكن ترك رقم الاضافة او السنة المالية فارغة");
      return;
    }

    navigation.navigate("AddDetailsView", {
      fyear: selectedFyear,
      edafaNumber: selectedEdafa,
      data: cache.get("edafat")[selectedFyear.name][selectedEdafa.name],
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.title}>{"سنة مالية"}</Text>
      </View>

      <DropDownList
        data={fyear}
        onSelect={(item) => {
          setSelectedFyear(item);
        }}
        selectedItem={selectedFyear}
      />

      <View style={{ marginBottom: 10 }}>
        <Text style={styles.title}>{"رقم الإضافة المخزنية"}</Text>
      </View>

      <DropDownList
        data={edafaNumber}
        onSelect={(item) => {
          setSelectedEdafa(item);
        }}
        selectedItem={selectedEdafa}
      />

      <TouchableOpacity style={styles.footerBtnContainer} onPress={goToAddDetails}>
        <Text style={styles.btnText}>{"التالي"}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    paddingHorizontal: 10,
    backgroundColor: "white",
    paddingTop: 10,
    marginBottom: 2,
  },

  title: {
    color: "#0078B5",
    fontSize: 22,
    fontWeight: "bold",
  },

  footerBtnContainer: {
    backgroundColor: "#0078B5",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

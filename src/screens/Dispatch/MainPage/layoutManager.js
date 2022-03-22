import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DropDownList from "../../../components/DropDownList/dropDownList";
import cache from "../../../shared/cache";

export default function LayoutManager({ navigation, fyear, sarfNumber }) {
  const [selectedFyear, setSelectedFyear] = useState(null);
  const [selectedSarf, setSelectedSarf] = useState(null);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [navigation]);

  const goToSarfDetails = () => {
    if (selectedSarf === null || selectedFyear === null) {
      alert("لايمكن ترك رقم الاضافة او السنة المالية فارغة");
      return;
    }

    navigation.navigate("SarfDetailsView", {
      fyear: selectedFyear,
      sarfNumber: selectedSarf,
      data: cache.get("sarf")[selectedFyear.name][selectedSarf.name],
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
        <Text style={styles.title}>{"رقم إذن الصرف"}</Text>
      </View>

      <DropDownList
        data={sarfNumber}
        onSelect={(item) => {
          setSelectedSarf(item);
        }}
        selectedItem={selectedSarf}
      />

      <TouchableOpacity
        style={styles.footerBtnContainer}
        onPress={goToSarfDetails}
      >
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

import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import NumericInput from "../../../../components/numericInput";

export default function EditQuanModal({ closeModal }) {
  const [number, setNumber] = React.useState(1);
  return (
    <View style={styles.modalBackgroundContainer}>
      <View style={[styles.modalBodyContainer, styles.modalBodyShadow]}>
        <View style={styles.modalTitleContainer}>
          <Text style={styles.modalTitleText}>{"تعديل الكمية"}</Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={styles.detailsContainer}>
            <View style={{ marginLeft: 50 }}>
              <Text style={styles.detailsTitleText}>{"رقم التصنيف"}</Text>
            </View>
            <View style={styles.detailsTextContainer}>
              <Text style={styles.detailsText}>{"F1010203"}</Text>
            </View>
          </View>

          <View style={styles.editQuanContainer}>
            <View style={{ marginLeft: 50 }}>
              <Text style={styles.detailsTitleText}>{"الكمية"}</Text>
            </View>
            <NumericInput minNum={1} number={number} onChange={setNumber} />
          </View>
        </View>

        <View style={styles.modalFooterContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: "#01648e" }, styles.footerBtnContainer]}
          >
            <Text style={[styles.footerBtnText, { color: "white" }]}>
              {"حفظ"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={closeModal}
            style={[
              styles.footerBtnContainer,
              {
                borderColor: "#df4759",
                borderWidth: 1,
              },
            ]}
          >
            <Text style={[styles.footerBtnText, { color: "#df4759" }]}>
              {"إلغاء"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  modalBackgroundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalBodyContainer: {
    height: 250,
    width: 320,
    backgroundColor: "white",
    borderRadius: 10,
  },

  modalBodyShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  modalTitleContainer: {
    flex: 1,
    justifyContent: "center",
    maxHeight: 50,
    backgroundColor: "#01648e",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 3,
  },

  modalTitleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  detailsContainer: {
    flexDirection: "row-reverse",
    alignSelf: "stretch",
    paddingHorizontal: 10,
    paddingTop: 5,
    marginBottom: 10,
  },

  detailsTitleText: {
    color: "#0078B5",
    fontSize: 20,
    fontWeight: "bold",
  },

  detailsTextContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  detailsText: {
    color: "black",
    fontSize: 18,
  },

  modalFooterContainer: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 50,
    marginHorizontal: 20,
    marginBottom: 10,
  },

  editQuanContainer: {
    flexDirection: "row-reverse",
    alignSelf: "stretch",
    paddingHorizontal: 10,
    paddingTop: 5,
    marginBottom: 10,
  },

  footerBtnContainer: {
    flex: 1,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 50,
  },

  footerBtnText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Vibration,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

function TableRow({ row, index }) {
  const RowComp = row.map((column, index) => {
    return (
      <View
        key={index}
        style={[
          styles.tableColumnContainer,
          column.hasOwnProperty("containerStyle") ? column.containerStyle : {},
        ]}
      >
        <Text
          style={[
            styles.tableRowText,
            column.hasOwnProperty("textStyle") ? column.textStyle : {},
          ]}
        >
          {column.text}
        </Text>
      </View>
    );
  });
  return row.isClickable ? (
    <TouchableOpacity
      style={[
        styles.tableLineContainer,
        styles.tableRowContainer,
        row.hasOwnProperty("style") ? row.style : {},
      ]}
    >
      {RowComp}
    </TouchableOpacity>
  ) : (
    <View
      style={[
        styles.tableLineContainer,
        styles.tableRowContainer,
        row.hasOwnProperty("style") ? row.style : {},
      ]}
    >
      {RowComp}
    </View>
  );
}

function TableHeader({ tableHeaderData }) {
  const Header = tableHeaderData.map((column, index) => {
    return (
      <View
        key={index}
        style={[
          styles.tableColumnContainer,
          column.hasOwnProperty("containerStyle") ? column.containerStyle : {},
        ]}
      >
        <Text
          style={[
            styles.tableTitleText,
            column.hasOwnProperty("textStyle") ? column.textStyle : {},
          ]}
        >
          {column.text}
        </Text>
      </View>
    );
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row-reverse",
        alignSelf: "stretch",
        justifyContent: "space-around",
      }}
    >
      {Header}
    </View>
  );
}

export default function DataTable({ tableHeaderData, data, TableRowComp }) {
  return (
    <View style={{ flex: 1, alignSelf: "stretch", alignItems: "center" }}>
      <View style={[styles.tableLineContainer, styles.tableHeaderContainer]}>
        <TableHeader tableHeaderData={tableHeaderData} />
      </View>

      <View style={styles.tableBody}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return TableRowComp ? (
              <TableRowComp row={item.style} index={index} />
            ) : (
              <TableRow row={item.style} index={index} />
            );
          }}
          keyExtractor={(item) => item.data.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tableLineContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignSelf: "stretch",
    paddingVertical: 8,
    paddingHorizontal: 2,
    paddingLeft: 8,
    justifyContent: "space-around",
  },

  tableHeaderContainer: {
    marginBottom: 3,
    backgroundColor: "#01648e",
    maxHeight: "20%",
  },

  tableBody: {
    flex: 1,
    alignSelf: "stretch",
  },

  tableRowContainer: {
    borderBottomWidth: 1.5,
    borderColor: "#dcddde",
  },

  tableColumnContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },

  tableTitleText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },

  tableRowText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

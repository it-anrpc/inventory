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
  TextInput,
} from "react-native";
import CheckBox from "react-native-check-box";

function EditQuanModal({ closeModal }) {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={[
            {
              height: 250,
              width: 320,
              backgroundColor: "white",
              borderRadius: 10,
            },
            {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,

              elevation: 10,
            },
          ]}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              maxHeight: 50,
              backgroundColor: "#01648e",
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
              paddingHorizontal: 15,
              marginBottom: 3,
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              {"تعديل الكمية"}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row-reverse",
                alignSelf: "stretch",
                paddingHorizontal: 10,
                paddingTop: 5,
                marginBottom: 10,
              }}
            >
              <View style={{ marginLeft: 50 }}>
                <Text
                  style={{ color: "#0078B5", fontSize: 20, fontWeight: "bold" }}
                >
                  {"رقم التصنيف"}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "black", fontSize: 18 }}>
                  {"F1010203"}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row-reverse",
                alignSelf: "stretch",
                paddingHorizontal: 10,
                paddingTop: 5,
                marginBottom: 10,
              }}
            >
              <View style={{ marginLeft: 50 }}>
                <Text style={styles.detailsTitleText}>{"الكمية"}</Text>
              </View>
              <TextInput
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  justifyContent: "center",
                  color: "black",
                  maxHeight:20,
                  borderBottomWidth: 1,
                }}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
              />
            </View>
          </View>

          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              flexDirection: "row-reverse",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: 50,
              marginHorizontal: 20,
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#01648e",
                paddingVertical: 5,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 20,
                borderRadius: 50,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                {"حفظ"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={closeModal}
              style={{
                flex: 1,
                paddingVertical: 5,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 20,
                borderRadius: 50,
                borderColor: "#df4759",
                borderWidth: 1,
              }}
            >
              <Text
                style={{ color: "#df4759", fontSize: 20, fontWeight: "bold" }}
              >
                {"إلغاء"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

function DetailsComp({ title, value, styles }) {
  return (
    <View style={styles.detailsContainer}>
      <View style={{ marginLeft: 50 }}>
        <Text style={styles.detailsTitleText}>{title}</Text>
      </View>
      <View style={styles.detailsTextContainer}>
        <Text style={styles.detailsValueText}>{value}</Text>
      </View>
    </View>
  );
}

function TableRowComp({ edafaNum, tsnif, quan, checked, onSelectRow, index }) {
  const [isShowModal, setIsShowModal] = useState(false);

  const closeModal = () => {
    setIsShowModal(false);
  };
  const onCheck = () => {
    Vibration.vibrate(18);
    onSelectRow(index);
  };
  return (
    <TouchableOpacity
      onPress={onCheck}
      onLongPress={() => {
        Vibration.vibrate(50);
        setIsShowModal(true);
      }}
      style={styles.tableRowContainer}
    >
      <View
        style={[
          styles.tableColumnDataContainer,
          {
            flex: 1.1,
            flexDirection: "row-reverse",
            justifyContent: "flex-start",
            paddingLeft: 40,
          },
        ]}
      >
        <CheckBox
          style={{ marginLeft: 3 }}
          onClick={onCheck}
          isChecked={checked}
          checkedCheckBoxColor="#01648e"
          uncheckedCheckBoxColor="#7f7f7f"
        />
        <Text style={styles.tableRowText}>{edafaNum}</Text>
      </View>
      <View
        style={[
          styles.tableColumnDataContainer,
          {
            flex: 1,
            marginRight: -30,
          },
        ]}
      >
        <Text style={styles.tableRowText}>{tsnif}</Text>
      </View>
      <View
        style={[
          styles.tableColumnDataContainer,
          {
            flex: 0.6,
          },
        ]}
      >
        <Text style={styles.tableRowText}>{quan}</Text>
      </View>

      <Modal
        visible={isShowModal}
        animationType={"fade"}
        transparent={true}
        style={{ width: 320, height: 250 }}
        onRequestClose={closeModal}
      >
        <EditQuanModal closeModal={closeModal} />
      </Modal>
    </TouchableOpacity>
  );
}
export default function LayoutManager({
  navigation,
  fyear,
  edafaNumber,
  data,
}) {
  const [tableData, setTableData] = useState(
    data.map((item) => {
      item.checked = false;

      return item;
    })
  );

  const onSelectRow = (index) => {
    tableData[index].checked = !tableData[index].checked;

    setTableData(JSON.parse(JSON.stringify(tableData)));
  };

  const onSelectAll = () => {
    var tempTableData = JSON.parse(JSON.stringify(tableData));
    setTableData(
      tempTableData.map((item) => {
        item.checked = true;
        return item;
      })
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignSelf: "stretch",
        alignItems: "center",
      }}
    >
      <View style={{ alignSelf: "stretch" }}>
        <DetailsComp
          title={"رقم الإضافة المخزنية"}
          value={edafaNumber}
          styles={styles}
        />
        <DetailsComp title={"السنة المالية"} value={fyear} styles={styles} />
      </View>

      <View style={{ flex: 1, alignSelf: "stretch" }}>
        <View style={styles.tableHeaderContainer}>
          <View style={[styles.tableTitleContainer, { flex: 1.1 }]}>
            <Text style={[styles.tableTitleText]}>
              {"رقم الإضافة المخزنية"}
            </Text>
          </View>
          <View style={[styles.tableTitleContainer, { alignItems: "center" }]}>
            <Text style={styles.tableTitleText}>{"رقم التصنيف"}</Text>
          </View>
          <View
            style={[
              styles.tableTitleContainer,
              { alignItems: "center", flex: 0.6 },
            ]}
          >
            <Text style={styles.tableTitleText}>{"الكمية"}</Text>
          </View>
        </View>
        <FlatList
          data={tableData}
          renderItem={({ item, index }) => {
            return (
              <TableRowComp
                edafaNum={edafaNumber}
                tsnif={item.tsnif}
                quan={item.quan}
                checked={item.checked}
                onSelectRow={onSelectRow}
                index={index}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={onSelectAll}>
          <Text style={styles.btnText}>{"اختيار الكل"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>{"طباعة"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row-reverse",
    alignSelf: "stretch",
    paddingHorizontal: 10,
    paddingTop: 5,
    marginBottom: 10,
  },
  detailsTextContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  detailsTitleText: {
    color: "#0078B5",
    fontSize: 18,
    fontWeight: "bold",
  },
  detailsValueText: {
    color: "black",
    fontSize: 16,
  },
  btnContainer: {
    flexDirection: "row-reverse",
    alignSelf: "stretch",
    alignItems: "center",
    marginVertical: 10,
  },
  btn: {
    flex: 1,
    backgroundColor: "#01648e",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  tableHeaderContainer: {
    flexDirection: "row-reverse",
    alignSelf: "stretch",
    backgroundColor: "#01648e",
    paddingVertical: 10,
    paddingHorizontal: 3,
    paddingLeft: 10,
    justifyContent: "space-between",
    marginBottom: 3,
  },
  tableTitleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  tableTitleText: {
    color: "white",
    fontSize: 18,
  },
  tableRowContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignSelf: "stretch",
    paddingVertical: 8,
    borderBottomWidth: 1.5,
    borderColor: "#dcddde",
  },
  tableColumnDataContainer: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  tableRowText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
});

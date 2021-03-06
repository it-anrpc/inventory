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
import CheckBox from "react-native-check-box";
import EditQuanModal from "./components/editQuan";

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

function TableRowComp({
  tsnif,
  desc,
  quan,
  checked,
  onSelectRow,
  onChangePrintQuan,
  printQuan,
  index,
}) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(1);
  const [lastPress, setLastPress] = useState(0);

  const closeModal = () => {
    setIsShowModal(false);
  };

  const onCheck = (index) => {
    Vibration.vibrate(18);
    onSelectRow(index);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        onCheck(index);
      }}
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
            flex: 2,
            flexDirection: "row-reverse",
            justifyContent: "flex-start",
          },
        ]}
      >
        <CheckBox
          style={{ marginLeft: 7 }}
          onClick={() => {
            onCheck(index);
          }}
          isChecked={checked}
          checkedCheckBoxColor="#01648e"
          uncheckedCheckBoxColor="#7f7f7f"
        />
        <Text style={styles.tableRowText}>{tsnif}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          var delta = new Date().getTime() - lastPress;

          if (delta < 200) {
            Vibration.vibrate(18);
            if (desc.length > 9) {
              setIsExpanded(isExpanded == 0 ? 1 : 0);
            } else {
              setIsExpanded(1);
            }
          }
          setLastPress(new Date().getTime());
        }}
        style={[styles.tableColumnDataContainer, { flex: 2 }]}
      >
        <Text
          style={[styles.tableRowText, { width: "80%" }]}
          numberOfLines={isExpanded}
        >
          {desc}
        </Text>
      </TouchableOpacity>
      <View style={[styles.tableColumnDataContainer]}>
        <Text style={styles.tableRowText}>{quan}</Text>
      </View>
      <View style={[styles.tableColumnDataContainer]}>
        <Text style={styles.tableRowText}>{printQuan}</Text>
      </View>

      <Modal
        visible={isShowModal}
        animationType={"fade"}
        transparent={true}
        style={{ width: 320, height: 250 }}
        onRequestClose={closeModal}
      >
        <EditQuanModal
          closeModal={closeModal}
          onApprove={onChangePrintQuan}
          index={index}
          minNum={1}
          maxNum={quan}
        />
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
      item.printQuan = 1;

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

  const onChangePrintQuan = (index, quan) => {
    tableData[index].printQuan = quan;

    setTableData(JSON.parse(JSON.stringify(tableData)));
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
          title={"?????? ?????????????? ????????????????"}
          value={edafaNumber}
          styles={styles}
        />
        <DetailsComp title={"?????????? ??????????????"} value={fyear} styles={styles} />
      </View>

      <View style={{ flex: 1, alignSelf: "stretch" }}>
        <View style={styles.tableHeaderContainer}>
          <View style={[styles.tableTitleContainer, { flex: 2 }]}>
            <Text style={styles.tableTitleText}>{"?????? ??????????????"}</Text>
          </View>

          <View style={[styles.tableTitleContainer, { flex: 2 }]}>
            <Text style={styles.tableTitleText}>{"???????? ??????????????"}</Text>
          </View>

          <View style={[styles.tableTitleContainer]}>
            <Text style={styles.tableTitleText}>{"????????????"}</Text>
          </View>

          <View style={[styles.tableTitleContainer]}>
            <Text style={styles.tableTitleText}>{"???????? ??????????????"}</Text>
          </View>
        </View>
        <FlatList
          data={tableData}
          renderItem={({ item, index }) => {
            return (
              <TableRowComp
                tsnif={item.tsnif}
                desc={item.desc}
                quan={item.quan}
                checked={item.checked}
                printQuan={item.printQuan}
                onSelectRow={onSelectRow}
                onChangePrintQuan={onChangePrintQuan}
                index={index}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={onSelectAll}>
          <Text style={styles.btnText}>{"???????????? ????????"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>{"??????????"}</Text>
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
    paddingVertical: 8,
    paddingHorizontal: 2,
    paddingLeft: 8,
    justifyContent: "space-around",
    marginBottom: 3,
  },
  tableTitleContainer: {
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
  tableRowContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignSelf: "stretch",
    paddingVertical: 8,
    paddingHorizontal: 2,
    paddingLeft: 8,
    borderBottomWidth: 1.5,
    justifyContent: "space-around",
    borderColor: "#dcddde",
  },
  tableColumnDataContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  tableRowText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

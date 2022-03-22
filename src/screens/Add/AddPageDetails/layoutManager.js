import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Vibration,
  Modal,
} from "react-native";
import HoneywellScanner from "react-native-honeywell-scanner-v2";
import DataTable from "../../../components/dataTable";
import EditQuanModal from "./components/editQuan";

var tableHeader = [
  { text: "رقم التصنيف", containerStyle: { flex: 1.2 } },
  { text: "بيان التصنيف", containerStyle: { flex: 2 } },
  { text: "الكمية" },
  { text: "وحدة القياس" },
  { text: "الكمية الفعلية" },
];

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

function TableRowComp({ tsnif, desc, quan, unit, scanedQuan, index }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(1);

  const closeModal = () => {
    setIsShowModal(false);
  };
  return (
    <TouchableOpacity
      onLongPress={() => {
        Vibration.vibrate(50);
        //setIsShowModal(true);
      }}
      onPress={() => {
        Vibration.vibrate(18);
        if (desc.length > 9) {
          setIsExpanded(isExpanded == 0 ? 1 : 0);
        } else {
          setIsExpanded(1);
        }
      }}
      style={[
        styles.tableRowContainer,
        {
          backgroundColor: scanedQuan == quan ? "#00ff00" : "white",
        },
      ]}
    >
      <View style={[styles.tableColumnDataContainer, { flex: 1.2 }]}>
        <Text style={styles.tableRowText}>{tsnif}</Text>
      </View>
      <View style={[styles.tableColumnDataContainer, { flex: 2 }]}>
        <Text
          style={[styles.tableRowText, { width: "80%" }]}
          numberOfLines={isExpanded}
        >
          {desc}
        </Text>
      </View>
      <View style={[styles.tableColumnDataContainer]}>
        <Text style={styles.tableRowText}>{quan}</Text>
      </View>
      <View style={[styles.tableColumnDataContainer]}>
        <Text style={styles.tableRowText}>{unit}</Text>
      </View>
      <View style={[styles.tableColumnDataContainer]}>
        <Text style={styles.tableRowText}>{scanedQuan}</Text>
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
      item.scanedQuan = 0;
      var json = {
        data: item,
        style: [
          { text: item.tsnif, containerStyle: { flex: 1.2 } },
          { text: item.desc, containerStyle: { flex: 2 } },
          { text: item.quan },
          { text: item.unit },
          { text: item.scanedQuan },
        ],
        isClickable: true,
      };

      return json;
    })
  );

  useEffect(() => {
    if (HoneywellScanner.isCompatible) {
      HoneywellScanner.startReader().then((claimed) => {
        console.log(
          claimed ? "Barcode reader is claimed" : "Barcode reader is busy"
        );
        HoneywellScanner.onBarcodeReadSuccess((event) => {
          console.log("Received data", event.data);
          const tsnif = event.data.split("-")[0];

          var datas = tableData.map((item) => {
            if (item.data.tsnif === tsnif) {
              console.log("a7aaaaaaaaaaaaaaa");
              var temp = JSON.parse(JSON.stringify(item));
              if (temp.data.scanedQuan < temp.data.quan) {
                temp.data.scanedQuan = temp.data.scanedQuan + 1;
              }
              console.log(temp);
              return temp;
            }

            return item;
          });

          setTableData(datas);
        });
      });

      return () => {
        HoneywellScanner.stopReader().then(() => {
          console.log("Freedom!!");
          HoneywellScanner.offBarcodeReadSuccess();
        });
      };
    }
  });

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
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
        }}
      >
        <DataTable tableHeaderData={tableHeader} data={tableData} />
      </View>
      {/* <View style={{ flex: 1, alignSelf: "stretch" }}>
        <FlatList
          data={tableData}
          renderItem={({ item, index }) => {
            return (
              <TableRowComp
                tsnif={item.tsnif}
                quan={item.quan}
                desc={item.desc}
                unit={item.unit}
                scanedQuan={item.scanedQuan}
                index={index}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View> */}

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>{"إضافة"}</Text>
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

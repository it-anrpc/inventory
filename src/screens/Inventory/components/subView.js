import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import AlertMessage from "../../../components/alertMessage";
import DropDownList from "../../../components/DropDownList/dropDownList";

var unCompletedGard = [
  { id: 0, name: "test1" },
  { id: 1, name: "test2" },
  { id: 3, name: "test3" },
  { id: 4, name: "test4" },
  { id: 5, name: "test5" },
];
const PrintOldView = ({ navigation }) => {
  const [selectedGard, setSelectedGard] = useState(null);

  const validateSelectedGard = (selectedGard) => {
    if (selectedGard == null || selectedGard == "") {
      var validate_message = "عفواً يجب أختيار أسم جرد أولاً";
      alert(validate_message);

      return false;
    }

    return true;
  };
  const gotoGard = (selectedGard) => {
    if (validateSelectedGard(selectedGard)) {
      Alert.alert("asdasd", "done");
    }
  };

  return (
    <View style={styles.selectionContainer}>
      <View style={{ justifyContent: "flex-start" }}>
        <View style={{ marginTop: 15, marginBottom: 10 }}>
          <Text style={styles.title}>{"أسم الجرد"}</Text>
        </View>
        <DropDownList
          data={unCompletedGard}
          onSelect={(item) => {
            setSelectedGard(item);
          }}
          selectedItem={selectedGard}
        />
      </View>

      <View>
        <TouchableOpacity
          style={[styles.footerBtnContainer, { marginBottom: 10 }]}
          onPress={() => {
            gotoGard(selectedGard);
          }}
        >
          <Text style={styles.btnText}>{"إنهاء الجرد"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerBtnContainer}
          onPress={() => {
            gotoGard(selectedGard);
          }}
        >
          <Text style={styles.btnText}>{"أستئناف الجرد"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PrintNewView = ({ navigation, gardType, validateGardType }) => {
  const [gardName, onChangeGardName] = React.useState(null);
  const [isShowAlert, setIsShowAlert] = React.useState(false);

  const validateGardName = (name) => {
    if (name == null || name == "") {
      var validate_message = "عفواً يجب إدخال الاسم أولاً";
      alert(validate_message);

      return false;
    }

    return true;
  };
  const gotoGard = (gardType, name) => {
    if (validateGardType(gardType)) {
      if (validateGardName(name)) {
        setIsShowAlert(true);
      }
    }
  };

  const onCloseMessage = () => {
    setIsShowAlert(false);
  };

  return (
    <View style={styles.selectionContainer}>
      <View style={{ flex: 1, marginTop: 50 }}>
        <Text style={styles.title}>{"أسم الجرد"}</Text>

        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeGardName}
          value={gardName}
          keyboardType="numeric"
          underlineColorAndroid={"#0078B5"}
          numberOfLines={1}
          maxLength={20}
        />
      </View>
      <TouchableOpacity
        style={styles.footerBtnContainer}
        onPress={() => {
          gotoGard(gardType, gardName);
        }}
      >
        <Text style={styles.btnText}>{"التالي"}</Text>
      </TouchableOpacity>

      <AlertMessage
        isShowAlert={isShowAlert}
        title="تنبيه"
        message={"هل تريد الاستمرار بهذا الأسم (" + gardName + ") ؟"}
        buttons={[
          {
            title: "تأكيد",
            onPress: onCloseMessage,
          },
          {
            title: "إلغاء",
            btnStyle: {
              borderWidth: 1,
              borderRadius: 300,
              marginHorizontal: 30,
              borderColor: "#ff835c",
              backgroundColor: "transparent",
            },
            txtStyle: { color: "#ff835c" },
            onPress: onCloseMessage,
          },
        ]}
      />
    </View>
  );
};

// TODO: this lkajsd

export default function SubView({ navigation, gardType }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: "oldPrint", title: "قديم" },
    { key: "newPrint", title: "جديد" },
  ]);

  const validateGardType = (type) => {
    if (type == null || type == undefined) {
      var validate_message = "عفوا برجاء اختيار نوع الجردأولاً";
      alert(validate_message);
      return false;
    }

    return true;
  };
  const renderScene = ({ route }) => {
    switch (route.key) {
      case "oldPrint":
        return <PrintOldView navigation={navigation} />;
      case "newPrint":
        return (
          <PrintNewView
            navigation={navigation}
            gardType={gardType}
            validateGardType={validateGardType}
          />
        );
      default:
        return null;
    }
  };

  return (
    <TabView
      tabStyle={{ backgroundColor: "green" }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      style={{ marginTop: 10 }}
      renderTabBar={(props) => (
        <TabBar
          renderLabel={({ route, focused, color }) => (
            <Text
              style={{
                color: focused ? "#EEEEEE" : "#6c757d",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 1,
              }}
            >
              {route.title}
            </Text>
          )}
          indicatorStyle={{
            backgroundColor: "#0275d8",
            height: "100%",
            opacity: 0.7,
          }}
          style={{ backgroundColor: "white" }}
          {...props}
        />
      )}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
const styles = StyleSheet.create({
  selectionContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "space-between",
    zIndex: 100,
    paddingHorizontal: 15,
    paddingTop: 0,
    paddingBottom: 25,
  },
  title: {
    color: "#0078B5",
    fontSize: 22,
    fontWeight: "bold",
  },

  txtInput: {
    flex: 1,
    maxHeight: 60,
    fontSize: 25,
    textAlign: "center",
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

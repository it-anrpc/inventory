import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeView from "../screens/Home/homeView";
import PrintView from "../screens/Print/MainPage/mainPrintPageView";
import PrintDetailsView from "../screens/Print/PrintPageDetails/printPageDetailsView";
import AddView from "../screens/Add/MainPage/mainAddView";
import AddDetailsView from "../screens/Add/AddPageDetails/addPageDetailsView";
import DispatchView from "../screens/Dispatch/MainPage/mainDispatchView";
import SarfDetailsView from "../screens/Dispatch/SarfPageDetails/sarfPageDetailsView";
import InventoryView from "../screens/Inventory/inventoryView";
import AppHeader from "../components/header";

const Stack = createNativeStackNavigator();

function ShowHeader(props) {
  return (
    <View
      style={{
        flex: 1,
        maxHeight: 70,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "white",
      }}
    >
      <AppHeader title={props.title} />
    </View>
  );
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeView"
        component={HomeView}
        options={{
          tabBarVisible: true,
          gesturesEnabled: false,
          header: () => <ShowHeader title={"القائمة الرئيسية"} />,
        }}
      />
      <Stack.Screen
        name="PrintView"
        component={PrintView}
        options={{
          tabBarVisible: true,
          gesturesEnabled: false,
          header: () => <ShowHeader title={"طباعة"} />,
        }}
      />
      <Stack.Screen
        name="PrintDetailsView"
        component={PrintDetailsView}
        options={{
          tabBarVisible: true,
          gesturesEnabled: false,
          header: () => <ShowHeader title={"طباعة"} />,
        }}
      />
      <Stack.Screen
        name="AddView"
        component={AddView}
        options={{
          tabBarVisible: true,
          gesturesEnabled: false,
          header: () => <ShowHeader title={"إضافة"} />,
        }}
      />
      <Stack.Screen
        name="AddDetailsView"
        component={AddDetailsView}
        options={{
          tabBarVisible: true,
          gesturesEnabled: false,
          header: () => <ShowHeader title={"إضافة"} />,
        }}
      />
      <Stack.Screen
        name="DispatchView"
        component={DispatchView}
        options={{
          tabBarVisible: true,
          gesturesEnabled: false,
          header: () => <ShowHeader title={"صرف"} />,
        }}
      />
      <Stack.Screen
        name="SarfDetailsView"
        component={SarfDetailsView}
        options={{
          tabBarVisible: true,
          gesturesEnabled: false,
          header: () => <ShowHeader title={"صرف"} />,
        }}
      />
      <Stack.Screen
        name="InventoryView"
        component={InventoryView}
        options={{
          tabBarVisible: true,
          gesturesEnabled: false,
          header: () => <ShowHeader title={"الجرد"} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

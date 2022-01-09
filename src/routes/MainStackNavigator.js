import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeView from "../screens/Home/homeView";
import PrintView from "../screens/Print/printView";
import AddView from "../screens/Add/addView";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeView"
        component={HomeView}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      />
      <Stack.Screen
        name="PrintView"
        component={PrintView}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      />
      <Stack.Screen
        name="AddView"
        component={AddView}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      />
      {/* <Stack.Screen
        name="PrintView"
        component={PrintView}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      />
      <Stack.Screen
        name="PrintView"
        component={PrintView}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      />
      <Stack.Screen
        name="PrintView"
        component={PrintView}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      />
      <Stack.Screen
        name="PrintView"
        component={PrintView}
        options={{
          headerShown: false,
          tabBarVisible: true,
          gesturesEnabled: false,
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

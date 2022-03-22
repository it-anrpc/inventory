import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";

export default function AlertMessage({
  isShowAlert,
  onCloseAlert = () => {},
  title,
  message,
  buttons,
}) {
  const btns = buttons.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={item.onPress}
        style={[
          {
            paddingHorizontal: 25,
            paddingVertical: 5,
            borderRadius: 300,
            marginHorizontal: 30,
            backgroundColor: "#0078B5",
          },
          item.hasOwnProperty("btnStyle") == true ? item.btnStyle : null,
        ]}
      >
        <Text
          style={[
            { fontSize: 18, color: "white" },
            item.hasOwnProperty("txtStyle") == true ? item.txtStyle : null,
          ]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  });
  return (
    <Modal
      visible={isShowAlert}
      animationType={"fade"}
      transparent={true}
      onRequestClose={onCloseAlert}
    >
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
              maxHeight: 500,
              width: 320,
              backgroundColor: "white",
              borderRadius: 5,
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
              paddingTop: 15,
              paddingBottom: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "600", color: "black" }}>
              {title}
            </Text>
          </View>
          <View
            style={{
              paddingTop: 10,
              marginHorizontal: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "400", color: "black" }}>
              {message}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row-reverse",
              paddingTop: 30,
              paddingBottom: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {btns}
          </View>
        </View>
      </View>
    </Modal>
  );
}

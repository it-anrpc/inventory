import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";

const HomeButton = (props) => {
  button_style = props.style;

  return (
    <TouchableOpacity
      key={props.keys}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      style={button_style}
    >
      <View style={styles.imageView}>
        <Image
          style={[styles.btnIcon, props.image_ratio]}
          source={props.buttonImage}
        />
      </View>

      <View style={styles.textView}>
        <Text style={styles.btnTitle}>{props.buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0078B5",
    textAlign: "center",
  },
  imageView: { flex: 3, alignSelf: "stretch", alignItems: "center" },
  textView: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  btnIcon: {
    flex: 1,
    resizeMode: "contain",
  },
});

export { HomeButton };

/*
          <Image
            resizeMode="stretch"
            style={styles.folderIcon}
            source={props.folderData.img}
          />

                  

*/

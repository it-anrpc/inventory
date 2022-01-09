import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { HomeButton } from "./homeButton";

function generateLayout(props) {
  var rows = [];
  for (let i = 0; i < props.buttonArgs.length; i++) {
    let row = [];
    for (let j = 0; j < props.buttonArgs[i].length; j++) {
      row.push(
        <HomeButton
          key={props.buttonArgs[i][j].id}
          style={[styles.btn, styles.spaceBetween, styles.cardShadow]}
          onPress={() => {
            if (props.buttonArgs[i][j].title == "") return;
            if (props.buttonArgs[i][j].path) {
              props.navigation.navigate(props.buttonArgs[i][j].path);
            }
          }}
          buttonText={props.buttonArgs[i][j].title}
          buttonImage={props.buttonArgs[i][j].img}
          image_ratio = {props.buttonArgs[i][j].image_ratio}
        />
      );
    }
    rows.push(
      <View key={i} style={styles.row}>
        {row}
      </View>
    );
  }

  return rows;
}
const HomeViewGenerator = (props) => {
  return <View  style={styles.keyboard}>{generateLayout(props)}</View >;
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    //height:140,
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
  },
  keyboard: {
    flex: 1,
    marginTop: 2,
  },
  btn: {
    flex: 1,
    flexDirection:"column",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    opacity: 0.8,
  },

  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },

  spaceBetween: {
    margin: 5,
  },
});

export { HomeViewGenerator };

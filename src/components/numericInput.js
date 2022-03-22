import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default class NumericInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plusDisabled: false,
      minusDisabled: true,
      isReadOnly:
        this.props.hasOwnProperty("isReadOnly") == false
          ? false
          : this.props.isReadOnly,

      maxNum:
        this.props.hasOwnProperty("maxNum") == false ? 99 : this.props.maxNum,

      minNum:
        this.props.hasOwnProperty("minNum") == false ? 1 : this.props.minNum,
    };
    this.timer = null;
    this.increaseNum = this.increaseNum.bind(this);
    this.decreaseNum = this.decreaseNum.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  increaseNum() {
    if (this.props.number + 1 > this.state.maxNum) {
      return;
    } else if (this.props.number + 1 == this.state.maxNum) {
      this.setState({ plusDisabled: true });
    }

    if (this.state.minusDisabled == true) {
      this.setState({ minusDisabled: false });
    }

    this.props.onChange(this.props.number + 1);
    this.timer = setTimeout(this.increaseNum, 150);
  }

  decreaseNum() {
    if (this.props.number - 1 < this.state.minNum) {
      return;
    } else if (this.props.number - 1 == this.state.minNum) {
      this.setState({ minusDisabled: true });
    }

    if (this.state.plusDisabled == true) {
      this.setState({ plusDisabled: false });
    }

    this.props.onChange(this.props.number - 1);
    this.timer = setTimeout(this.decreaseNum, 150);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity
          onPressIn={this.increaseNum}
          onPressOut={this.stopTimer}
          disabled={this.state.plusDisabled}
          style={[styles.plusBtnContainer, styles.functionBtnShadow]}
        >
          <Icon
            name={"plus"}
            size={26}
            color={this.state.plusDisabled ? "#ccc" : "white"}
          />
        </TouchableOpacity>

        <View style={styles.numberContainer}>
          {this.state.isReadOnly == true ? (
            <Text style={{ color: "black", fontSize: 22 }}>
              {this.props.number}
            </Text>
          ) : (
            <TextInput
              style={{
                fontSize: 22,
                justifyContent: "center",
                paddingVertical: 10,
              }}
              onChange={(value) => {
                if (parseInt(value.nativeEvent.text) > this.state.maxNum) {
                  alert("لا يجب ان تتعدي الحد الاقصي");
                  this.props.onChange(this.state.maxNum);
                  return;
                } else if (
                  parseInt(value.nativeEvent.text) < this.state.minNum
                ) {
                  alert("لا يجب ان تتعدي الحد الادني");
                  this.props.onChange(this.state.minNum);
                  return;
                }
                this.props.onChange(
                  value.nativeEvent.text == ""
                    ? this.props.number
                    : parseInt(value.nativeEvent.text)
                );
              }}
              textAlign={"center"}
              defaultValue={this.props.number.toString()}
              keyboardType="numeric"
              maxLength={4}
            />
          )}
        </View>

        <TouchableOpacity
          onPressIn={this.decreaseNum}
          onPressOut={this.stopTimer}
          disabled={this.state.minusDisabled}
          style={[styles.minusBtnContainer, styles.functionBtnShadow]}
        >
          <Icon
            name={"minus"}
            size={26}
            color={this.state.minusDisabled ? "#ccc" : "white"}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: 120,
    maxHeight: 60,
  },
  plusBtnContainer: {
    backgroundColor: "#01648e",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  minusBtnContainer: {
    backgroundColor: "#01648e",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },

  numberContainer: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  functionBtnShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});

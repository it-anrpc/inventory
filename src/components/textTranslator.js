import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import translator from "../shared/translator";
import cache from "../shared/cache";

export default function TextTranslator(props) {
  return <Text style={props.style}>{props.viewText}</Text>;
}

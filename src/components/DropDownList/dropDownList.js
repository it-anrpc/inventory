import React, { useState } from "react";
import LayoutManager from "./layoutManager";

export default function DropDownList({
  navigation,
  data,
  selectedItem,
  onSelect,
  onDropDownPressed,
}) {
  return (
    <LayoutManager
      value={selectedItem}
      data={data}
      onSelect={onSelect}
      onDropDownPressed={onDropDownPressed}
    />
  );
}

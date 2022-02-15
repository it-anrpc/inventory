import React, { useState } from "react";
import LayoutManager from "./layoutManager";

export default function DropDownList({ navigation, data }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const onSelect = item => {
    setSelectedItem(item);
  };

  return (
    <LayoutManager value={selectedItem} data={data} onSelect={onSelect} />
  );
}

import React from "react";
import cache from "../../shared/cache";
import LayoutManager from "./layoutManager";

export default function InventoryView({ navigation }) {
  return (
    <LayoutManager navigation={navigation} gardTypes={cache.get("gard_types")} />
  );
}

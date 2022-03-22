import React from "react";
import LayoutManager from "./layoutManager";
import cache from "../../shared/cache";
import database from "../../shared/database.json";
import { View } from "react-native";

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    cache.set("Fyear", database.Fyear);
    cache.set("edafaNumbers", database.edafaNumbers);
    cache.set("sarfNumbers", database.sarfNumbers);
    cache.set("edafat", database.edafat);
    cache.set("sarf", database.sarf);
    cache.set("gard_types", database.gard_types);
  }
  render() {
    return (
      <View style={{ flex: 1}}>
        <LayoutManager navigation={this.props.navigation} />
      </View>
    );
  }
}

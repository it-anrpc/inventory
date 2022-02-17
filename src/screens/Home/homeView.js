import React from "react";
import LayoutManager from "./layoutManager";
import cache from "../../shared/cache";
import database from "../../shared/database.json";

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    cache.set("Fyear", database.Fyear);
    cache.set("edafaNumbers", database.edafaNumbers);
    cache.set("edafat", database.edafat);
  }
  render() {

    return <LayoutManager navigation={this.props.navigation} />;
  }
}

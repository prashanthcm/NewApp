import React, { Component } from "react";
import HomeScreen from "./src/HomeScreen/index.js";
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  render() {
    return <HomeScreen />;
  }
}

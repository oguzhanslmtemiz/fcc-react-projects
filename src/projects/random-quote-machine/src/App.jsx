import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Container from "./components/Container";
import "./style.scss"

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

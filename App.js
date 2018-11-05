import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import { createStackNavigator } from "react-navigation";

import LoginScreen from "./src/screens/LoginScreen";
import MainScreenTab from "./src/screens/MainScreenTab";

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <AppStackNavigator />
      </Provider>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  MainScreenTab: MainScreenTab
});

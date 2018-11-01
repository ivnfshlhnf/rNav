/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from "react-navigation";

import LoginScreen from "./src/screens/LoginScreen";
import MainScreenTab from './src/screens/MainScreenTab';

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  MainScreenTab: MainScreenTab
})
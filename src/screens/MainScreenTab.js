import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import ListScreen from "./ListScreen";

export default createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => <Icon name="ios-home" size={24} />
    }
  },
  List: {
    screen: ListScreen,
    navigationOptions: {
      tabBarLabel: "List",
      tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={24} />
    }
  }
});

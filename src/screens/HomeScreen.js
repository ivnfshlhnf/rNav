import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class HomeScreen extends Component {
  onGobackHandler = () => {
    this.props.navigation.goBack();
  };
  onGobackToTopHandler = () => {
    this.props.navigation.popToTop()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button title="go back 1" onPress={this.onGobackHandler} />
        <Button title="go back to top" onPress={this.onGobackToTopHandler} />
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

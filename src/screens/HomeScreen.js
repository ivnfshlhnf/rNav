import React, { Component } from "react";
import { connect } from "react-redux";
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
        <Text>{this.props.user.username}</Text>
        <Button title="go back 1" onPress={this.onGobackHandler} />
        <Button title="go back to top" onPress={this.onGobackToTopHandler} />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  null
)(HomeScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

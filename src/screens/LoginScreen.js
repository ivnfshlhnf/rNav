import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { connect } from "react-redux";

import { setUser } from "../store/actions/index";

class LoginScreen extends Component {
  state = {
    user: {
      username: "",
      email: ""
    }
  };

  usernameChangedHandler = val => {
    let user = this.state.user;
    user.username = val;
    this.setState({
      user: user
    });
  };

  emailChangedhandler = val => {
    let user = this.state.user;
    user.email = val;
    this.setState({
      user: user
    });
  };

  static navigationOptions = {
    header: null
  };

  onUserLoginHandler = () => {
    this.props.onUserLogin(this.state.user);
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>Username</Text>
          <TextInput
            style={styles.inputText}
            value={this.state.username}
            onChangeText={this.usernameChangedHandler}
          />
          <Text>Email</Text>
          <TextInput
            style={styles.inputText}
            value={this.state.email}
            onChangeText={this.emailChangedhandler}
          />
        </View>
        <Text>{this.state.username}</Text>
        <Text>{this.state.email}</Text>
        <Button title="Login" onPress={this.onUserLoginHandler} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUserLogin: user => dispatch(setUser(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    width: "70%",
    alignItems: "center"
  },
  inputText: {
    padding: 10,
    width: "100%",
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 15
  }
});

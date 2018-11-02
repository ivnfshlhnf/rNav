import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

class LoginScreen extends Component {
  state = {
    username: "",
    email: ""
  };

  usernameChangedHandler = val => {
    this.setState({
      username: val
    });
  };

  emailChangedhandler = val => {
    this.setState({
      email: val
    });
  };

  static navigationOptions = {
    header: null
  };

  onChangeScreenHandler = () => {
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
        <Button
          title="go to Home Screen"
          onPress={this.onChangeScreenHandler}
        />
      </View>
    );
  }
}
export default LoginScreen;

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

import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

class ListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ListScreen</Text>
      </View>
    );
  }
}
export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
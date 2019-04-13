import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message, time} =  this.props;
    return (
     <View style={styles.container}>
         <Text>{message}</Text>
         <Text>{time}</Text>
     </View>
    );
  }
}

// export default props => (
//   <View style={styles.container}>
//     <Text>{props.message}</Text>
//     <Text>{props.time}</Text>
//   </View>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

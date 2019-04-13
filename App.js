import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  // Primero
  constructor() {
    super();
    this.state = {
      message: "Open up App.js to start working on your app!",
      time: new Date().toLocaleString(),
      timeIntervalId: ""
    };
    console.log("Constructor()");
  }

  //Deprecated
  //Despues el constructor y antes del render
  // componentWillMount() {
  //   console.log('componentWillMount()');
  // }

  // API requests
  // Solo despues del primer render
  componentDidMount() {
    let timeIntervalId = this.createInterval(1);
    // this.stop1(timeIntervalId);
    // this.setState({ timeIntervalId });
    console.log("componentDidMount()");
  }

  stop1 = intervalId => {
    setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);
  };

  //Crear un interval y actualiar la hora
  createInterval(intervalTime) {
    let intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      });
    }, intervalTime * 1000);
    return intervalId;
  }

  //Last
  //Antes de destruirse el objeto
  componentWillUnmount() {
    console.log("componentWillMount()");
  }

  //Deprecated
  //Cada vez que el componente reciba props actualizados
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps()');
  // }

  //Cada vez que el copmonente reciba props actualizados
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProp()");
    return {};
  }

  render() {
    console.log("render()", this.state);
    const { message, time } = this.state;
    return (
      <View style={styles.container}>
        <Text>{message}</Text>
        <Text>{time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CustomComponent from "./src/screens/CustomComponent";

const App = () => {

  const myName = "Deep Manohar Lahane";

  return (
    <View>
      {/* <Text style={styles.textStyle}> Hello World... App.js component </Text> */}
      <Text style={styles.textStyle} >Welcome to thapa technical channel</Text>
      <Text style={styles.textSty} >We love react native and I am a subscriber of thapa technical channel</Text>
      <Text>my name is {myName}.</Text>
      {/* <CustomComponent/>
      <CustomComponent/>
      <CustomComponent/>
      <CustomComponent/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "blue",
    fontWeight: 'bold',
    fontSize: 40,
  },

  textSty: {
    fontSize: 30,
  }
});

export default App;

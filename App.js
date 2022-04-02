import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CustomComponent from "./src/screens/CustomComponent";

const App = () => {
  return (
    <View>
      <Text style={styles.textStyle}> Hello World... App.js component </Text>
      <CustomComponent/>
      <CustomComponent/>
      <CustomComponent/>
      <CustomComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "green",
    marginTop: 200,
  },
});

export default App;

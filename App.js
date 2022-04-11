import React from "react";
import { Text, StyleSheet, View, FlatList, ScrollView } from "react-native";
import CustomComponent from "./src/screens/CustomComponent";
import FlatListDemo from "./src/screens/FlatListDemo";
import Images from "./src/screens/Images";
import Netflix from "./src/screens/Netflix";
import CounterNumber from "./src/screens/CounterNumber";
import ColorGenerator from "./src/screens/ColorGenerator";

const App = () => {
  // const myName = "Deep Manohar Lahane";

  return (
    <View>
      {/* <Text>this is some text</Text> */}
      {/* <Text style={styles.textStyle}> Hello World... App.js component </Text> */}
      {/* <Text style={styles.textStyle} >Welcome to thapa technical channel</Text>
      <Text style={styles.textSty} >We love react native and I am a subscriber of thapa technical channel</Text>
      <Text>my name is {myName}.</Text> */}
      {/* <CustomComponent/>
      <CustomComponent/>
      <CustomComponent/> 
      <CustomComponent/> */}
      {/* <FlatListDemo/> */}
      {/* <Images/> */}
      {/* <Text style={styles.textStyle}>Netflix Cards</Text> */}
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Netflix />
        <Netflix />
        <Netflix />
        <Netflix />
        <Netflix />
        <Netflix />
        <Netflix />
        <Netflix />
        <Netflix />
        <Netflix />
      </ScrollView> */}
      {/* <CounterNumber /> */}
      <ColorGenerator/>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    padding: 30,
    marginLeft: 70,
    // fontFamily: "JosefinSans_500Medium",
    fontSize: 35,
    color: "#d80600",
    fontVariant: ["tabular-nums"], 
    marginBottom: 10,
  },
  

  textSty: {
    fontSize: 30,
  },
  firstView: {},
});

export default App;

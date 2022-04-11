import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomComponent = () => {
  const myName = "Deep";
  const myElement = <Text>Nice to meet you Guys!!!</Text>;

  const myFullName = (fname,mname,lname) => {
      return (
        `my Full name is ${fname} ${mname} ${lname}`
      );
  }

  return (
    <view>
    //   <Text style={styles.textStyle}>
    //     {" "}
    //     hello World! this is my custom component and my name is {myName}
    //   </Text>
    //   <Text> {myElement}</Text>
    //   {"\n"}
    //   <Text>{myFullName('Deep','Manohar','Lahane')}</Text>
    </view> 
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "green",
  },
});

export default CustomComponent;

import React from "react";
import { Text,View,StyleSheet,Image } from "react-native";

const Images = () => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}>This is my Image</Text>  
      <Image style={styles.imageStyle} source={require("../../assets/img1.png")} ></Image>
      <Image style={styles.imageStyle} source={require("../../assets/img1.png")} ></Image>
      <Image style={styles.imageStyle} source={require("../../assets/img1.png")} ></Image>
      <Image style={styles.imageStyle} source={require("../../assets/img1.png")} ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    // height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
      marginBottom: 10,
    fontSize: 30,
  },
  imageStyle:{
      marginBottom:10,
      height: 300,
      width: 300,
  }
});

export default Images;

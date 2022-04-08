import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Image
} from "react-native";

const OurButton = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Our Button</Text>
      {/* <Button
        title="Join Now  s"
        onPress={() => {
          console.log("the button has been clicked!");
          Alert.alert("simple nalsnlfbutton pressed");
        }}
        disabled
      /> */}

      <TouchableOpacity style={styles.tochOp}
        onPress={()=>{
            Alert.alert("complex stuff")
        }}
      >
        <Text style={styles.tochOpColor} >this is for complex stuff</Text>
        <Image source={require("../../assets/img2.jpeg")} style={styles.imgStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 100,
    textAlign: "center",
    fontSize: 30,
  },
  tochOp: {
    marginTop: 50,
    alignItems: "center",
    borderWidth: 10,
    borderColor: "lightcoral",
    backgroundColor: "lightcoral"
  },
  tochOpColor:{
      color: "white",
  },
  imgStyle:{
    width: 300,
    height: 300,
  }
});

export default OurButton;

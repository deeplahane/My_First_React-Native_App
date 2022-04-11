import { JosefinSans_100Thin } from "@expo-google-fonts/josefin-sans";
import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CounterNumber = () => {

    let [counter,setCounter]=useState(0);

  return (
    <View>
      <Text style={styles.counter}>{counter}</Text>

      <TouchableOpacity style={styles.container} onPress={() => {
          setCounter(counter+10);
      }}>
        <Text style={styles.btn}>
            +10
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => {
          setCounter(0);
      }}>
        <Text style={styles.btn}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => {
          if(counter>0){
            setCounter(counter-10);
          }
      }}>
        <Text style={styles.btn}>-10</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    fontSize: 70,
    marginTop: 100,
    marginBottom: 50,
    textAlign: "center",
  },
  btn: {
    width: 200,
    height: 70,
    paddingTop: 12,
    backgroundColor: "black",
    marginVertical: 30,
    fontSize: 30,
    color: "white",
    borderRadius: 5,
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    // alignItems
  },
});

export default CounterNumber;

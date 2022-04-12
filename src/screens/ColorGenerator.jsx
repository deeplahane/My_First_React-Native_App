import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";

const ColorGenerator = () => {
  const [newColor, setNewColor] = useState([]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    return `rgb(${red},${blue},${green})`;
  };

  console.log(newColor);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.heightView}>
        <FlatList
          keyExtractor={(key) => key}
          data={newColor}
          renderItem={({ item }) => {
            return (
              <View style={styles.imageContainer}>
                <Text
                  style={{
                    backgroundColor: item,
                    color: "white",
                    width: 300,
                    height: 70,
                    borderRadius: 5,
                    fontSize: 20,
                    paddingTop: 18,
                    textAlign: "center",
                  }}
                >
                  {item}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
            // Alert.alert(randomColor());
          setNewColor([...newColor, randomColor()]);
        }}
      >
        <Text style={styles.btnTitle}>GENERATE RANDOM COLOR</Text>
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
  },
  btn: {
    backgroundColor: "#00b0ff",
    position: "relative",
    bottom: -20,
    // left: 100,
    overflow: "hidden",
    color: "#eeeeee",
    paddingVertical: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnTitle: {
    color: "white",
    textTransform: "uppercase",
  },
  imageContainer: {
    position: "relative",
    marginVertical: 20,
    paddingHorizontal: 30,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heightView: {
    height: 770,
  }
});

export default ColorGenerator;

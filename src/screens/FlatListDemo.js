/* rnpce-> react native pure component */

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const FlatListDemo = () => {
  const names = [
    {
      index: "1",
      name: "Deep",
    },
    {
      index: "2",
      name: "Manohar",
    },
    {
      index: "3",
      name: "Lahane",
    },
    {
      index: "4 ",
      name: "Suvarna",
    },
    {
      index: "5 ",
      name: "Suvarna",
    },
    {
      index: "6 ",
      name: "Suvarna",
    },
    {
      index: "7 ",
      name: "Suvarna",
    },
  ];

  return (
    <FlatList
    style={styles.listStyle}
      keyExtractor={(index) => {
        return index.index;
      }}
      horizontal 
      showsHorizontalScrollIndicator={false}
      // numColumns={2}
      inverted
      data={names}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 20,
    backgroundColor: "cadetblue",
    margin: 20,
    color: "maroon",
  },
  listStyle: {
    textAlign:"center",
    padding: 10,
    margin: 20,
  },
});

export default FlatListDemo;

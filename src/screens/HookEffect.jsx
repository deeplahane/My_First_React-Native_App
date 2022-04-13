import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from "react-native";

const HookEffect = () => {
  const [userData, setUserData] = useState();
  const [load, setLoad] = useState(true);

  const getUserData = async () => {
    try {
      const data = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const newData = await data.json();
      setUserData(newData);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.mainTitle}>List of Students</Text>
      <FlatList
        data={userData}
        renderItem={({ item }) => {
          return (
            <View style={styles.mainContainer}>
             {
               load ? (
                 <View>
                   <ActivityIndicator size={"large"} color="#0000ff" />
                 </View>
               ) : (
                 <View>
                    <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item.image }} />
              </View>
              <View style={styles.infoContainer}>
                <View style={styles.bioHead}>
                  <Text style={styles.bioTitle}>Bio-Data</Text>
                  <Text style={styles.uID}>
                    {item.userId < 10 ?  `#0${item.userId}` : `#${item.userId}` }
                    </Text>
                </View>
                <View style={styles.bioDetails}>
                  <View style={styles.flexWrap}>
                    <Text style={styles.detail}>Name: </Text>
                    <Text style={styles.details}> {item.name}</Text>
                  </View>
                  <View style={styles.flexWrap}>
                    <Text style={styles.detail}>E-mail: </Text>
                    <Text style={styles.details}> {item.email}</Text>
                  </View>
                  <View style={styles.flexWrap}>
                    <Text style={styles.detail}>Website: </Text>
                    <Text style={styles.spedetails}> {item.website}</Text>
                  </View>
                  <View style={styles.flexWrap}>
                    <Text style={styles.detail}>Mobile: </Text>
                    <Text style={styles.details}> {item.mobile}</Text>
                  </View>
                  <View style={styles.flexWrap}>
                    <Text style={styles.detail}>Description: </Text>
                    <Text style={styles.spedetails}> {item.description}</Text>
                  </View> 
                </View>
              </View>
                 </View>
               )
             }
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spedetails: {
    fontSize: 14,
    marginVertical: 10,
    color: "#595f78",
    flex: 1,
  },
  flexWrap: {
    flexDirection: "row",
  },
  infoContainer: {},
  details: {
    fontSize: 14,
    marginVertical: 10,
    color: "#595f78",
  },
  detail: {
    fontSize: 14,
    marginVertical: 10,
    color: "gray",
  },
  bioDetails: {
    width: 300,
    paddingLeft: 10,
  },
  bioTitle: {
    paddingLeft: 15,
    fontSize: 25,
    color: "#b5bbd1",
  },
  uID: {
    paddingRight: 5,
    fontSize: 18,
    color: "#beafab",
  },
  bioHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
  mainTitle: {
    marginTop: 50,
    marginBottom: 20,
    fontSize: 35,
    color: "#edeff4",
  },
  outerContainer: {
    alignItems: "center",
    backgroundColor: "#17203f",
  },
  mainContainer: {
    marginBottom: 60,
    borderWidth: 2,
    borderColor: "gray",
    backgroundColor: "#0f152b",
    borderRadius: 4,
  },
  image: {
    width: 300,
    height: undefined,
    aspectRatio: 1,
  },
  imageContainer: {
    alignItems: "center",
    // padding: 5,
  },
});

export default HookEffect;

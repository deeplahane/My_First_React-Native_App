import react from "react";
import { View, Image, Text, StyleSheet, Button, Linking } from "react-native";
import {
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useEffect } from "react";

const Netflix = ({name,image,description}) => {
  let [fontsLoad,error] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  });

  

  if (!fontsLoad) {
    return <AppLoading />;
  }

  return (
    <View style={styles.firstView}>
      {/* <Text style={styles.textStyle}>Netflix Card</Text> */}
      <View  style={styles.secondView}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: image,
          }}
        />
        <View style={styles.posterInfo}>
          <Text style={styles.movieName}>{name}</Text>
          <Text style={styles.someText}>
            {description}
          </Text>
        </View>
        <Button
          style={styles.btn}
          title="Watch Now"
          onPress={() => {
            Linking.openURL("https://www.netflix.com/in/");
          }}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstView: {
    paddingHorizontal: 50,
    // marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "JosefinSans_500Medium",
    fontSize: 35,
    color: "#d80600",
    fontVariant: ["tabular-nums"], 
    marginBottom: 10,
  },
  imgStyle: {
    width: 300,
    height: undefined,
    aspectRatio: 1,
  },
  movieName: {
    fontSize: 27,
    marginBottom: 10,
    fontFamily: "JosefinSans_700Bold",
  },
  posterInfo: {
    alignItems: "center",
    marginVertical: 10,
  },
  secondView: {
    height: 510,
    borderWidth: 1,
    alignItems: "center",
  },
  someText: {
    width: 300,
    color: "gray",
    fontSize: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    lineHeight: 20,
    textAlign: "justify",
    // textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
  },
  btn: {
    borderRadius: 20,
    borderWidth: 0,
    fontFamily: "JosefinSans_600SemiBold",
  },
});

export default Netflix;

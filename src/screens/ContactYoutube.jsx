import { View, Text, StyleSheet, Linking, TextInput } from "react-native";
import React from "react";
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
import Checkbox from "expo-checkbox";

const ContactYoutube = () => {

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
    <View>
      <View style={style.loginTitleContainer}>
        <Text style={style.loginTitle}>Login Form</Text>
        <Text style={style.someText}>
          You can reach us anytime via deeplahane15@gmail.com
        </Text>
      </View>
      <View style={style.fieldContainer}>
        <Text style={style.fieldTitle}>Enter your name</Text>
        <TextInput style={style.fieldInput}
            autoCapitalize="none" autoCorrect={false}
        ></TextInput>
      </View>
      <View style={style.fieldContainer}>
        <Text style={style.fieldTitle}>Enter your password</Text>
        <TextInput style={style.fieldInput} 
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        ></TextInput>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  loginTitleContainer: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  loginTitle: {
    fontSize: 32,
    marginTop: 30,
    fontFamily: "JosefinSans_700Bold",
  },
  someText: {
    marginTop: 20,
    marginBottom: 30,
    color: "gray",
    fontFamily: "JosefinSans_700Bold",
    fontSize: 20,
  },
  fieldContainer: {
    marginBottom: 30,
    marginLeft: 30,
  },
  fieldTitle: {
    fontSize: 20,
    paddingBottom: 10,
    color: "gray",
  },
  fieldInput: {
    borderWidth: 2,
    borderColor: "gray",
    width: 300,
    height: 50,
    borderRadius: 3,
    fontSize: 25,
  },
});

export default ContactYoutube;

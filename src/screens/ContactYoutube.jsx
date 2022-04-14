import {
  View,
  Text,
  StyleSheet,
  Linking,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
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

const ContactYoutube = ({navigation}) => {
  const [userName, setUserName] = useState("");
  // console.log(userName);
  const [Password, setPassword] = useState("");
  console.log(Password);
  const [agree, setAgree] = useState(false);

  const submit = () => {
    // Alert.alert(userName, Password);
    if(userName==="deeplahane15" && Password==="Deeplahane#1"){
      Alert.alert(`Welcome ${userName}`);
      navigation.navigate("home");
    }else{
      Alert.alert(`username or password is incorrect`);
    }
  };

  let [fontsLoad, error] = useFonts({
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
    <View style={style.mainContainer}>
      <View style={style.loginTitleContainer}>
        <Text style={style.loginTitle}>Login Form</Text>
        <Text style={style.someText}>
          You can reach us anytime via deeplahane15@gmail.com
        </Text>
      </View>
      <View style={style.fieldContainer}>
        <Text style={style.fieldTitle}>Enter your name</Text>
        <TextInput
          style={style.fieldInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={(data) => setUserName(data)}
        ></TextInput>
      </View>
      <View style={style.fieldContainer}>
        <Text style={style.fieldTitle}>Enter your password</Text>
        <TextInput
          style={style.fieldInput}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={Password}
          onChangeText={(newData) => setPassword(newData)}
        ></TextInput>
      </View>
      <View style={style.loginBtnWrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={style.textWrapper}>I have read & agreed with the TC</Text>
      </View>
      <TouchableOpacity
        style={[
          style.loginBtn,
          { backgroundColor: agree ? "#4630EB" : "gray" },
        ]}
        disabled={!agree}
        onPress={() => submit()}
        
      >
        <Text style={style.loginTxt}>LOGIN</Text>
      </TouchableOpacity>
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
    marginTop: 50,
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
    alignItems: "flex-start",
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
    fontSize: 20,
    paddingLeft: 10,
  },
  loginBtnWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  textWrapper: {
    marginLeft: 20,
    fontFamily: "JosefinSans_400Regular",
  },
  loginBtn: {
    padding: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    marginLeft: 30,
    borderRadius: 5,
  },
  loginTxt: {
    fontSize: 20,
    color: "white",
  },
  loginWrapper: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ContactYoutube;

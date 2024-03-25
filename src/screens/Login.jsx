import React, {useCallback} from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../constants/constants";
import { InputField } from "../components/InputField";
import Button from "../components/Button";

import Icon from "../components/Icon";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


const Login = () => {
  const [fontsLoaded,fontError] = useFonts({
    "Charm-Bold" : require("../../assets/fonts/Charm-Bold.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }



  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.top}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.author}>Powered by kamate Drissa</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.loginBottom}>Log in</Text>
        <InputField iconName="user" placeholder="Username" />
        <InputField iconName="lock" placeholder="Password" type='password'/>
        <Button bgColor={COLORS.blue} color={COLORS.white} text="Log in" />
        <View style={styles.icons}>
          <Icon name="facebook-square" bgColor={COLORS.blue} />
          <Icon name="instagram" bgColor={COLORS.blue} />
          <Icon name="telegram" bgColor={COLORS.blue} />
          <Icon name="twitter" bgColor={COLORS.blue} />
          <Icon name="whatsapp" bgColor={COLORS.blue} />
        </View>
        <Text style={styles.forgotPassword}>Forgot Password?...Click here</Text>
        <Text style={styles.line}></Text>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    backgroundColor: "#453076",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
    gap: 5,
    borderBottomLeftRadius: 100,
  },
  login: {
    fontSize: 30,
    color: COLORS.white,
    fontWeight: "500",
  },
  author: {
    letterSpacing: 1.5,
    fontSize: 18,
    color: COLORS.white,
    fontFamily: "Charm-Bold",
    fontWeight: "100",
  },
  bottom: {
    borderRadius: -100,
    alignItems: "center",
    marginTop: 20,
    gap: 15,
  },
  loginBottom: {
    fontWeight: "600",
    fontSize: 30,
  },
  icons: {
    flexDirection: "row",
    gap: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  forgotPassword: {
    color: COLORS.blue,
    fontSize: 16,
    letterSpacing: 1.2,
  },
  line: {
    width: 300,
    marginTop: -10,
    height: 1,
    borderWidth: 1,
    borderColor: COLORS.blue,
  },
});

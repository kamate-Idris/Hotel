import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../constants/constants";
import { FontAwesome } from "@expo/vector-icons";





export const InputField = ({iconName, placeholder, type, value, onChangeText }) => {
  return (
    <View style={styles.inputField}>
      <FontAwesome name={iconName} size={24} color="black" />
      <TextInput style={{height : 20, fontSize : 16}}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        selectionColor='black'
        secureTextEntry={type === "password" ? true : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: COLORS.grey,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    width : 320    
  },
 
});

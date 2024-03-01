import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../constants/constants";
import { FontAwesome } from "@expo/vector-icons";





export const InputField = ({iconName, placeholder, value, onChangeText }) => {
  return (
    <View style={styles.inputField}>
      <FontAwesome name={iconName} size={24} color="black" />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
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

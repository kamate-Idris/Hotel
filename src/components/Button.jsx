import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ bgColor,color, text }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={[styles.button,{backgroundColor : bgColor}]}>
      <Text style={{fontSize : 18, fontWeight : '600', color:color}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        width: 320,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,

    }
})

export default Button;

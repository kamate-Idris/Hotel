import React from 'react'
import { View } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from '../constants/constants';

const Icon = ({name,bgColor}) => {
  return (
      <View style={{padding:10,backgroundColor:bgColor, borderRadius : 10}}>
          <FontAwesome name={name} size={30} color={COLORS.white} />
    </View>
  )
}

export default Icon
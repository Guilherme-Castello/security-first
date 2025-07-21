import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { colors } from "../Utils/colors";
import CheckBox from "./CheckBox";

interface CheckBoxes {
  label: string,
  value: boolean
}

export default function CheckBoxes({checkBoxesList, setIsCheck}: {checkBoxesList: CheckBoxes[], setIsCheck: () => void}) {

  return (
    <FlatList data={checkBoxesList} renderItem={({item}) => {
      return(
        <CheckBox isCheck={item.value} setIsCheck={setIsCheck} label={item.label}/>
      )
    }}/>
    // <CheckBox isCheck={isCheck} setIsCheck={setIsCheck} label="Coffee"/>  
  )
}
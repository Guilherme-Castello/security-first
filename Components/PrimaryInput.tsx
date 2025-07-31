import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import AnimatedModal from "./AnimatedModal";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { colors } from "../Utils/colors";

interface PrimaryInputInterface {
  onChange: (option: string) => void,
  value: string,
  placeHolder?: string
}

export default function PrimaryInput({onChange, value, placeHolder = 'Type your answare'}: PrimaryInputInterface) {
  return (
    <>
      <View>
        <TextInput value={value} placeholder={placeHolder} onChangeText={onChange} style={{ height: 40, borderRadius: 10, borderColor: 'black', borderWidth: 0.5, justifyContent: 'center', padding: 10, backgroundColor: 'white' }}/>
      </View>
    </>
  )
}
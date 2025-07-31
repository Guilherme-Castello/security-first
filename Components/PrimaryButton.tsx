import { Button, StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";

interface PrimaryButtonInterface {
  label: string,
  onPress: () => void,
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function PrimaryButton({label, onPress, style, textStyle}: PrimaryButtonInterface) {
  return (
    <TouchableOpacity onPress={onPress} style={[{backgroundColor: 'red', height: 50, borderRadius: 10, justifyContent: 'center'}, style]}>
      <Text style={[{textAlign: 'center'}, textStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
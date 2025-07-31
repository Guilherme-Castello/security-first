import { StyleProp, TextInput, View, ViewStyle } from "react-native";

interface PrimaryInputInterface {
  onChange: (option: string) => void,
  value: string,
  placeHolder?: string
  style?: StyleProp<ViewStyle>
}

export default function PrimaryInput({ onChange, value, placeHolder = 'Type your answare', style }: PrimaryInputInterface) {
  return (
    <View>
      <TextInput value={value} placeholder={placeHolder} onChangeText={onChange} style={[style, { height: 40, borderRadius: 10, borderColor: 'black', borderWidth: 0.5, justifyContent: 'center', padding: 10, backgroundColor: 'white' }]} />
    </View>
  )
}
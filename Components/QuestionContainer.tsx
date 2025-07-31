import { ReactNode } from "react";
import { Text, View } from "react-native";
import { colors } from "../Utils/colors";

interface QuestionContainerProps {
  children: ReactNode;
  title: string
  id?: string
}

export default function QuestionContainer({ children, title, id = '0' }: QuestionContainerProps) {
  return (
    <View style={{ backgroundColor: colors.primary + '25', paddingVertical: 10, paddingHorizontal: 10, gap: 10, borderRadius: 10 }}>
      <Text style={{ fontSize: 17 }}>{id}- {title}</Text>
      <View style={{ marginHorizontal: 20 }}>
        {children}
      </View>
    </View>
  )
}
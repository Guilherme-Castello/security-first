import { FlatList, Text, TouchableOpacity, View } from "react-native";
import AnimatedModal from "./AnimatedModal";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { colors } from "../Utils/colors";

interface SelectInterface {
  setSelectedOption: (option: string) => void,
  options: string[],
  selectedOption: string
}

export default function Select({selectedOption, options, setSelectedOption}: SelectInterface) {

  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false)
  

  function SelectItem({ option, closeModal }: { option: string, closeModal: (callBack: () => void) => void }) {
    return (
      <TouchableOpacity onPress={() => closeModal(() => [setIsSelectOpen(false), setSelectedOption(option)])} style={[{ height: 50, justifyContent: 'center', borderRadius: 20 }, option == selectedOption && { backgroundColor: colors.secondary }]}>
        <Text style={[{ fontSize: 18, textAlign: 'center' }]}>{option}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <>
      <View>
        <TouchableOpacity onPress={() => setIsSelectOpen(true)} style={{ height: 40, borderRadius: 10, borderColor: 'black', borderWidth: 0.5, justifyContent: 'center', padding: 10, backgroundColor: 'white' }}>
          <Text>{selectedOption}</Text>
        </TouchableOpacity>
      </View>
      {isSelectOpen && <AnimatedModal position={400} title="Choose an option">
        {({ closeModal }) =>
          <View style={{ gap: 20 }}>
            <FlatList data={options} renderItem={(a) => <SelectItem option={a.item} closeModal={closeModal} />} style={{ maxHeight: 180, borderBottomWidth: 0.5, borderColor: colors.primary }} contentContainerStyle={{ gap: 2 }} />
            <PrimaryButton style={{ backgroundColor: colors.danger }} textStyle={{ color: 'white', fontSize: 18 }} label="Close" onPress={() => closeModal(() => setIsSelectOpen(false))} />
          </View>
        }
      </AnimatedModal>}
    </>
  )
}
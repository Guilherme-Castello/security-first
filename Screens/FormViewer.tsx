import { FlatList, SafeAreaView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Form, FormItem } from "../Types/FormStructure";
import RenderQuestion from "../Components/RenderQuestion";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import api from "../Server/api";

export default function FormViewer() {

  const route = useRoute();
  const { id } = route.params as { id: string };
  const [currentQuestions, setCurrentQuestions] = useState<FormItem[]>()
  const [currentForm, setCurrentForm] = useState<Form>()

  useEffect(() => {
    currentForm && setCurrentQuestions(currentForm.questions)
  }, [currentForm])

  const handleChangeText = useCallback((receivedIndex: number, newText: string) => {
    setCurrentQuestions((prev) => {
      if (prev == undefined) return undefined
      const test = prev.map((item, index) =>{
        if(index === receivedIndex) { 
          return { ...item, value: newText }
         } else { return item}
      })
      return test
    });
  }, []);

  const handleChangeCheckbox = useCallback((receivedIndex: number, check: boolean, boxid: number) => {
    setCurrentQuestions((prev) => {
      if (prev == undefined) return undefined
      return prev.map((item, index) => {
        return index === receivedIndex ? { ...item, check_boxes: item.check_boxes!.map(box => {
          if(box.id == boxid){
            return { ...box, value: !box.value }
          }
          return box
        }) } : item
      })
    });
  }, []);

  async function getSelectedForm() {
    try {
      const selectedForm: Form | undefined = await api.getFormById(id);
      selectedForm && setCurrentForm(selectedForm);
    } catch (error) {
      console.error('Error fetching form by ID:', error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getSelectedForm()
    }, [id])
  );

  return (
    <SafeAreaView style={{ backgroundColor: 'white', paddingHorizontal: 20, justifyContent: 'center' }}>
      <FlatList
        contentContainerStyle={{ gap: 12, paddingVertical: 40 }}
        data={currentQuestions}
        keyExtractor={(item) => item.id as any}
        renderItem={(item) => {
          return <RenderQuestion question={item.item} index={item.index} onChangeText={handleChangeText} handleChangeCheckbox={handleChangeCheckbox} />
        }}
      />
    </SafeAreaView>
  )
}
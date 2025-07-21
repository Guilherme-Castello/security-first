import { FlatList, SafeAreaView, ScrollView, Text } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Select from "../Components/Select";
import QuestionContainer from "../Components/QuestionContainer";
import PrimaryInput from "../Components/PrimaryInput";
import DateInput from "../Components/DateInput";
import { Form, FormItem } from "../Types/FormStructure";
import CheckBox from "../Components/CheckBox";
import { PreJobSafetyWorkAssessmentForm } from "../Mocks/PreJobSafetyWorkAssessment";
import { colors } from "../Utils/colors";

const RenderQuestion = React.memo(
  ({ question, index, onChangeText, handleChangeCheckbox }: { question: FormItem; index: number; onChangeText: (index: number, value: string) => void; handleChangeCheckbox: (id: number, check: boolean, boxid: number) => void }) => {
    switch (question.kind) {
      case "text":
        return (
          <QuestionContainer title={question.title} id={(question.id + 1).toString()}>
            <PrimaryInput
              onChange={(text) => onChangeText(index, text)}
              value={question.value}
            />
          </QuestionContainer>
        );
      case "select":
        return (
          <QuestionContainer title={question.title} id={(question.id + 1).toString()}>
            <Select options={question.options || []} selectedOption={question.value} setSelectedOption={(text) => onChangeText(index, text)} />
          </QuestionContainer>
        )

      case "input_date":
        return (
          <QuestionContainer title={question.title} id={(question.id + 1).toString()}>
            <DateInput value={question.value != '' ? new Date(question.value) : new Date()} onChange={(date) => onChangeText(index, date.toString())} mode="date" />
          </QuestionContainer>
        )
      case "input_time":
        return (
          <QuestionContainer title={question.title} id={(question.id + 1).toString()}>
            <DateInput value={question.value != '' ? new Date(question.value) : new Date()} onChange={(date) => onChangeText(index, date.toString())} mode="time" />
          </QuestionContainer>
        )

      case "check_boxes":
        return (
          <QuestionContainer title={question.title} id={(question.id + 1).toString()}>
            <FlatList
              data={question.check_boxes}
              renderItem={({ item, index: idx }) => (
                <CheckBox
                  isCheck={item.value}
                  label={item.label}
                  setIsCheck={(newValue) => {
                    handleChangeCheckbox(index, newValue, idx)
                  }}
                />
              )}
            />
          </QuestionContainer>
        )
      default:
        return null;
    }
  }
);

export default function Test() {

  const [currentQuestions, setCurrentQuestions] = useState<FormItem[]>()
  const [currentForm, setCurrentForm] = useState<Form>()

  useEffect(() => {
    setCurrentQuestions(PreJobSafetyWorkAssessmentForm.questions)
    setCurrentForm(PreJobSafetyWorkAssessmentForm)
  }, [])

  const handleChangeText = useCallback((id: number, newText: string) => {
    setCurrentQuestions((prev) => {
      if (prev == undefined) return undefined
      return prev.map((item) =>
        item.id === id ? { ...item, value: newText } : item
      )
    });
  }, []);

  const handleChangeCheckbox = useCallback((id: number, check: boolean, boxid: number) => {
    setCurrentQuestions((prev) => {
      if (prev == undefined) return undefined
      prev.map((item) =>
        item.id === id ? { ...item, check_boxes: item.check_boxes!.map(box => box.id == boxid ? { ...box, value: !box.value } : box) } : item
      )
    });
  }, []);


  return (
    <SafeAreaView style={{ backgroundColor: 'white', paddingHorizontal: 20, justifyContent: 'center' }}>
      <FlatList
        contentContainerStyle={{ gap: 12, paddingVertical: 40 }}
        data={currentQuestions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => {
          return <RenderQuestion question={item.item} index={item.index} onChangeText={handleChangeText} handleChangeCheckbox={handleChangeCheckbox} />
        }}
      />
    </SafeAreaView>
  )
}
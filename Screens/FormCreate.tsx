import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Select from "../Components/Select";
import { useEffect, useState } from "react";
import PrimaryInput from "../Components/PrimaryInput";
import AnimatedModal from "../Components/AnimatedModal";
import PrimaryButton from "../Components/PrimaryButton";
import { colors } from "../Utils/colors";
import { FormItem } from "../Types/FormStructure";
import RenderQuestion from "../Components/RenderQuestion";
import api from "../Server/api";

export default function FormCreate() {

  const componentTypeOptions = ['text', 'select', 'input_date', 'input_time', 'check_boxes']

  const [formTitle, setFormTitle] = useState<string>('')

  const [openConfigModal, setOpenConfigModal] = useState<boolean>(false)
  const [openFinishgModal, setOpenFinishModal] = useState<boolean>(false)

  const [selectedLabel, setSelectedLabel] = useState(componentTypeOptions[0])

  const [questionTitle, setQuestionTitle] = useState<string>('')

  const [questionOptionalType, setQuestionOptionalType] = useState<string>('')
  const [optionList, setOptionList] = useState<string[]>([])
  const [optionName, setOptionName] = useState<string>('')

  const [newForm, setNewForm] = useState<FormItem[] | undefined[]>([])

  function handleAddQuestion() {
    if (selectedLabel == 'check_boxes' || selectedLabel == 'select') {
      setOpenConfigModal(true)
      return
    } else {
      addQuestion()
    }
  }


  function addQuestion() {

    if (questionTitle == '') {
      return
    }

    const value = (selectedLabel == 'input_date' || selectedLabel == 'input_time') ? new Date() : ''
    const optionalOptions = optionList.map((option, idx) => selectedLabel == 'check_boxes' ? { id: idx, value: false, label: option } : option)

    const newQuestion = {
      id: newForm.length,
      kind: selectedLabel,
      title: questionTitle,
      value: value,
      [questionOptionalType]: optionalOptions,
    }

    setNewForm((prev: any) => {
      return [...prev, newQuestion]
    })

    setOptionList([])
    setOptionName('')
    setQuestionOptionalType('')
    setQuestionTitle('')
    setSelectedLabel(componentTypeOptions[0])
  }

  function removeFromList(itemIndex: number) {
    const newList = optionList.filter(prev => optionList.indexOf(prev) != itemIndex)
    setOptionList(newList)
  }

  function removeQuestion(itemIndex: number) {
    const updatedForm = newForm.filter(prev => newForm.indexOf(prev as never) != itemIndex)
    setNewForm(updatedForm as FormItem[])
  }

  useEffect(() => {
    switch (selectedLabel) {
      case 'select':
        setQuestionOptionalType('options')
        break
      case 'check_boxes':
        setQuestionOptionalType('check_boxes')
        break
      default:
        setQuestionOptionalType('')
        break
    }
  }, [selectedLabel])

  async function handleSaveForm() {
    if (formTitle == '') {
      return
    }

    let newFormCompleteStructure: any = {
        questions: newForm as FormItem[],
        title: formTitle,
        status: 'Open'
      }

    try{
      await api.createForm(newFormCompleteStructure)
      setNewForm([])
      setFormTitle('')
    } catch (error) {
      console.error('Error creating form:', error);
    }
  }

  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'white', paddingHorizontal: 20, justifyContent: 'center' }}>
        <View style={{ backgroundColor: 'white', height: '28%', gap: 10, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: colors.primary }}>
          <View style={{ gap: 5 }}>
            <Text>Question kind: </Text>
            <Select options={componentTypeOptions} selectedOption={selectedLabel} setSelectedOption={setSelectedLabel} />
          </View>
          <View style={{ gap: 5 }}>
            <Text>Title: </Text>
            <PrimaryInput onChange={setQuestionTitle} value={questionTitle} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: '48%' }}>
              <PrimaryButton onPress={() => handleAddQuestion()} label="Add Question" style={{ backgroundColor: colors.primary }} textStyle={{ color: 'white' }} />
            </View>
            <View style={{ width: '48%' }}>
              <PrimaryButton onPress={() => setOpenFinishModal(true)} label="Finish" style={{ backgroundColor: colors.primary }} textStyle={{ color: 'white' }} />
            </View>
          </View>
        </View>
        {newForm && newForm[0] != undefined && <FlatList
          contentContainerStyle={{ gap: 12, paddingBottom: 40, backgroundColor: 'white' }}
          data={newForm}
          style={{ height: '70%' }}
          keyExtractor={(item) => item!.id.toString()}
          renderItem={(item) => {
            return <RenderQuestion canDelete={true} onDelete={() => removeQuestion(item.index)} question={item.item as FormItem} index={item.index} onChangeText={() => console.log('')} handleChangeCheckbox={() => console.log('')} />
          }}
        />}
      </SafeAreaView>
      {openConfigModal && <AnimatedModal position={500} title="Choose an option">
        {({ closeModal }) =>
          <View style={{ gap: 20 }}>
            <FlatList data={optionList} style={{ height: 150 }} renderItem={(option) => {
              return (
                <View style={{ height: 50, justifyContent: 'space-between', borderRadius: 20, flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                  <Text>{option.item}</Text>
                  <TouchableOpacity onPress={() => removeFromList(option.index)} style={{ backgroundColor: colors.danger, width: 20, height: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white' }}>X</Text>
                  </TouchableOpacity>
                </View>
              )
            }} />
            <View style={{ flexDirection: 'row', width: '100%' }}>
              <View style={{ width: '90%' }}>
                <PrimaryInput onChange={setOptionName} value={optionName} style={{ backgroundColor: 'blue' }} />
              </View>
              <TouchableOpacity onPress={() => [setOptionList(prev => [...prev, optionName]), setOptionName('')]} style={{ width: '10%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                <Text style={{ color: 'white', fontWeight: 700, fontSize: 25, backgroundColor: colors.primary, paddingHorizontal: 10, borderRadius: 100 }}>+</Text>
              </TouchableOpacity>
            </View>
            <PrimaryButton style={{ backgroundColor: colors.primary }} textStyle={{ color: 'white', fontSize: 18 }} label="Submit" onPress={() => closeModal(() => [setOpenConfigModal(false), addQuestion()])} />
            <PrimaryButton style={{ backgroundColor: colors.danger }} textStyle={{ color: 'white', fontSize: 18 }} label="Close" onPress={() => closeModal(() => setOpenConfigModal(false))} />
          </View>
        }
      </AnimatedModal>}

      {openFinishgModal && <AnimatedModal position={400} title="Choose an option">
        {({ closeModal }) =>
          <View style={{ gap: 20 }}>
            <Text>Name your form:</Text>
            <PrimaryInput onChange={setFormTitle} value={formTitle} />
            <PrimaryButton style={{ backgroundColor: colors.danger }} textStyle={{ color: 'white', fontSize: 18 }} label="Close" onPress={() => closeModal(() => setOpenFinishModal(false))} />
            <PrimaryButton style={{ backgroundColor: colors.primary }} textStyle={{ color: 'white', fontSize: 18 }} label="Save" onPress={() => closeModal(() => [setOpenFinishModal(false), handleSaveForm()])} />
          </View>
        }
      </AnimatedModal>}
    </>
  )
}
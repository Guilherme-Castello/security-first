import { Form, FormItem } from "../Types/FormStructure";

export const FirstFormTestQuestions: FormItem[] = [
  {
    kind: 'text',
    title: 'Project Name:',
    value: '',
    check_boxes: undefined,
    options: undefined,
    id: 0
  },
  {
    kind: 'select',
    title: 'Project Status',
    options: ['Work in Progress', 'Canceled', 'Done'],
    value: '',
    check_boxes: undefined,
    id: 1
  },
  {
    kind: 'input_date',
    title: 'Date ',
    value: '',
    check_boxes: undefined,
    options: undefined,
    id: 2,
  },
  {
    kind: 'input_time',
    title: 'Time:',
    value: '',
    check_boxes: undefined,
    options: undefined,
    id: 3
  },
  {
    id: 4,
    kind: 'check_boxes',
    title: 'Select the potential hazards',
    value: '',
    options: undefined,
    check_boxes: [
      { id: 0, label: "FALL HAZARD(S)", value: false },
      { id: 1, label: "STRUCK BY HAZARD(S)", value: false },
      { id: 2, label: "CONFINED SPACES", value: false },
      { id: 3, label: "ELECTRICAL", value: false },
      { id: 4, label: "LADDER USE", value: false },
      { id: 5, label: "HOUSEKEEPING", value: false },
      { id: 6, label: "PAINS/STRAINS", value: false },
      { id: 7, label: "EXCAVATION/TRECHING", value: false },
      { id: 8, label: "CRANE OPERATIONS", value: false },
      { id: 9, label: "SCAFFOLDING", value: false },
      { id: 10, label: "HEAVY EQUIPMENT", value: false },
      { id: 11, label: "TRAFFIC CONTROL", value: false },
      { id: 12, label: "WHMIS 2015", value: false },
      { id: 13, label: "SLIP/TRIP HAZARDS", value: false },
      { id: 14, label: "MECHANICAL", value: false },
      { id: 15, label: "WORKING ALONE", value: false },
      { id: 16, label: "HOISTING/RIGGING", value: false },
      { id: 17, label: "ELEVATED PLATFORM", value: false },
      { id: 18, label: "WELDING/HOT WORK", value: false },
      { id: 19, label: "SWING STAGE", value: false },
      { id: 20, label: "POOR VENTILATION", value: false },
      { id: 21, label: "ASBESTOS/MOULD", value: false },
      { id: 22, label: "OVERHEAD HAZARD", value: false },
      { id: 23, label: "WORKING AT HEIGHTS", value: false },
      { id: 24, label: "NOISE/EYE HAZARDS", value: false },
      { id: 25, label: "RESPIRATORY HAZARDS", value: false },
      { id: 26, label: "SKIN HAZARDS", value: false },
      { id: 27, label: "HEAT OR COLD STRESS", value: false },
      { id: 28, label: "ACCESS/EGRESS", value: false },
      { id: 29, label: "RAILING", value: false }
    ]
  }
];

export const FirstFormTestForm: Form = {
    questions: FirstFormTestQuestions,
    id: 1,
    status: 'open',
    title: 'First Form Test'
}
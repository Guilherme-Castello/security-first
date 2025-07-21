import { Form, FormItem } from "../Types/FormStructure";

const PreJobSafetyWorkAssessmentQuestions: FormItem[] = [
  {
    kind: 'input_date',
    title: 'Date:',
    value: '',
    check_boxes: undefined,
    options: undefined,
    id: 0
  },
  {
    kind: 'input_time',
    title: 'Time:',
    options: undefined,
    value: '',
    check_boxes: undefined,
    id: 1
  },
  {
    kind: 'text',
    title: 'Project Name:',
    options: undefined,
    value: '',
    check_boxes: undefined,
    id: 2
  },
  {
    kind: 'text',
    title: 'Supervisor:',
    options: undefined,
    value: '',
    check_boxes: undefined,
    id: 3
  },
  {
    kind: 'text',
    title: 'Supervisor contact number:',
    options: undefined,
    value: '',
    check_boxes: undefined,
    id: 4
  },
  {
    kind: 'text',
    title: 'Work location:',
    options: undefined,
    value: '',
    check_boxes: undefined,
    id: 5
  },
  {
    kind: 'text',
    title: 'Weather:',
    options: undefined,
    value: '',
    check_boxes: undefined,
    id: 6
  },
  {
    kind: 'text',
    title: 'Crew members involved:',
    options: undefined,
    value: '',
    check_boxes: undefined,
    id: 7
  },
  {
    kind: 'text',
    title: 'Describe the Task / Scope of Work:',
    options: undefined,
    value: '',
    check_boxes: undefined,
    id: 8
  },
  {
    id: 9,
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
  },
  {
    id: 10,
    kind: 'check_boxes',
    title: ' Working at Heights',
    value: '',
    options: undefined,
    check_boxes: [
      { id: 0, label: "Travel Restraint", value: false },
      { id: 1, label: "Fall Restricting", value: false },
      { id: 2, label: "Fall Arrest", value: false },
      { id: 3, label: "Guardrails/Barriers", value: false },
      { id: 4, label: "Protective Floor Coverings", value: false },
    ]
  },
  {
    id: 11,
    kind: 'check_boxes',
    title: 'Working at Heights Rescue Plan ',
    value: '',
    options: undefined,
    check_boxes: [
        { id: 0, label: "Plan", value: false },
    ]
  },
  {
    id: 12,
    kind: 'check_boxes',
    title: 'Select the potential hazards',
    value: '',
    options: undefined,
    check_boxes: [
      { id: 0, label: "Confined Space Procedure", value: false },
        { id: 1, label: "Lock Out Tag Out Procedure", value: false },
        { id: 2, label: "Crane Lifting Procedure", value: false },
        { id: 3, label: "Written Traffic Protection Plan", value: false },
        { id: 4, label: "Working Alone", value: false }
    ]
  },
  {
    id: 13,
    kind: 'text',
    title: 'Severity (CREATE RADIO COMPONENT)',
    value: '',
    options: undefined,
    check_boxes: undefined
  },
  {
    id: 14,
    kind: 'text',
    title: 'Probability (CREATE RADIO COMPONENT)',
    value: '',
    options: undefined,
    check_boxes: undefined
  },
  {
    id: 15,
    kind: 'text',
    title: 'Identify the task steps and hazards, then identify the plan to eliminate or control the hazard:',
    value: '',
    options: undefined,
    check_boxes: undefined
  },
];

export const PreJobSafetyWorkAssessmentForm: Form = {
    questions: PreJobSafetyWorkAssessmentQuestions,
    id: 0,
    status: 'open',
    title: 'Pre-Job Safety and Work Assessment'
}

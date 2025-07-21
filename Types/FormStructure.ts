// export type FormItem =
//   | {
//       kind: 'text' | 'input_date' | 'input_time';
//       title: string;
//       value: string;
//       id: number;
//     }
//   | {
//       kind: 'select';
//       title: string;
//       options: string[];
//       value: string;
//       id: number;
//     }
//   | {
//       kind: 'check_boxes';
//       title: string;
//       id: number;
//       check_boxes: {
//         label: string;
//         value: boolean;
//         id: number;
//       }[];
//     };

export type FormItem = {
      kind: 'text' | 'input_date' | 'input_time' | 'select' | 'check_boxes';
      title: string;
      value: string;
      id: number;
      options: string[] | undefined;
      check_boxes: {
        label: string;
        value: boolean;
        id: number;
      }[] | undefined;
    }

export type Form = {
  questions: FormItem[],
  title: string,
  id: number,
  status: string
};

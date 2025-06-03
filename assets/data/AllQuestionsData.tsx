import { QuizQuestion } from '~/types';

export const beginnerQuestions: QuizQuestion[] = [
  {
    id: 'b1',
    type: 'MULTIPLE_CHOICE',
    text: "Kur yra 'šuo'?",
    options: [
      { id: '1', text: 'el perro', correct: true, image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
      { id: '2', text: 'el gato', image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
      { id: '3', text: 'el pez', image: 'https://cdn-icons-png.flaticon.com/512/616/616430.png' },
      { id: '4', text: 'el pájaro', image: 'https://cdn-icons-png.flaticon.com/512/616/616430.png' },
    ],
  },
  {
    id: 'b2',
    type: 'OPEN_ENDED',
    text: 'Katė yra ant sofos',
    answer: 'El gato está en el sofá',
  },
];

export const intermediateQuestions: QuizQuestion[] = [
  {
    id: 'i1',
    type: 'MULTIPLE_CHOICE',
    text: "Kur yra 'dramblys'?",
    options: [
      { id: '1', text: 'el león', image: 'https://cdn-icons-png.flaticon.com/512/616/616430.png' },
      { id: '2', text: 'el elefante', correct: true, image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
      { id: '3', text: 'la jirafa', image: 'https://cdn-icons-png.flaticon.com/512/616/616430.png' },
      { id: '4', text: 'el mono', image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
    ],
  },
  {
    id: 'i2',
    type: 'OPEN_ENDED',
    text: 'Man patinka gyvūnai',
    answer: 'Me gustan los animales',
  },
];

export const advancedQuestions: QuizQuestion[] = [
  {
    id: 'a1',
    type: 'MULTIPLE_CHOICE',
    text: "Kur yra 'krokodilas'?",
    options: [
      { id: '1', text: 'el cocodrilo', correct: true, image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
      { id: '2', text: 'la cebra', image: 'https://cdn-icons-png.flaticon.com/512/616/616430.png' },
      { id: '3', text: 'el pingüino', image: 'https://cdn-icons-png.flaticon.com/512/616/616430.png' },
      { id: '4', text: 'el zorro', image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
    ],
  },
  {
    id: 'a2',
    type: 'OPEN_ENDED',
    text: 'Krokodilas gyvena upėje',
    answer: 'El cocodrilo vive en el río',
  },
];

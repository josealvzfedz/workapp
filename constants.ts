import { Exercise, ExerciseType, Language } from './types';

interface LocalizedString {
  en: string;
  es: string;
}

interface PredefinedExercise {
  id: string;
  name: LocalizedString;
  type: ExerciseType;
  duration: number;
  reps: number;
  restBetweenReps: number;
  description: LocalizedString;
  imageUrl?: string;
}


const PREDEFINED_EXERCISES_DATA: PredefinedExercise[] = [
  {
    id: 'pd_jj',
    name: { en: 'Jumping Jacks', es: 'Saltos de Tijera' },
    type: ExerciseType.BLOCK,
    duration: 30,
    reps: 1,
    restBetweenReps: 0,
    description: {
      en: 'A full body cardio exercise. Stand with your feet together and your arms by your sides, then simultaneously jump your feet out to the sides and raise your arms above your head.',
      es: 'Un ejercicio cardiovascular de cuerpo completo. Párese con los pies juntos y los brazos a los lados, luego salte simultáneamente con los pies hacia los lados y levante los brazos por encima de la cabeza.'
    },
    imageUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jumping-Jacks/images/0.gif',
  },
  {
    id: 'pd_hk',
    name: { en: 'High Knees', es: 'Rodillas Arriba' },
    type: ExerciseType.BLOCK,
    duration: 30,
    reps: 1,
    restBetweenReps: 0,
    description: {
      en: 'Run in place, bringing your knees up towards your chest as high as possible, alternating legs.',
      es: 'Corre en el sitio, llevando las rodillas hacia el pecho lo más alto posible, alternando las piernas.'
    },
    imageUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/High-Knees/images/0.gif',
  },
  {
    id: 'pd_ac',
    name: { en: 'Arm Circles', es: 'Círculos con los Brazos' },
    type: ExerciseType.REPETITIVE,
    duration: 2,
    reps: 15,
    restBetweenReps: 0,
    description: {
      en: 'Extend your arms out to the sides at shoulder height. Make circles. For repetitive, this implies 15 reps of 2-second duration each.',
      es: 'Extiende los brazos hacia los lados a la altura de los hombros. Haz círculos. Para repetitivo, esto implica 15 repeticiones de 2 segundos de duración cada una.'
    },
    imageUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arm-Circles/images/0.gif',
  },
  {
    id: 'pd_sq',
    name: { en: 'Bodyweight Squats', es: 'Sentadillas con Peso Corporal' },
    type: ExerciseType.REPETITIVE,
    duration: 3,
    reps: 10,
    restBetweenReps: 2,
    description: {
      en: 'Stand with feet shoulder-width apart, lower your hips as if sitting in a chair, keeping your chest up and back straight.',
      es: 'Párese con los pies separados al ancho de los hombros, baje las caderas como si estuviera sentado en una silla, manteniendo el pecho erguido y la espalda recta.'
    },
    imageUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight-Squat/images/0.gif',
  },
  {
    id: 'pd_cs',
    name: { en: 'Cat-Cow Stretch', es: 'Estiramiento Gato-Vaca' },
    type: ExerciseType.REPETITIVE,
    duration: 5,
    reps: 8,
    restBetweenReps: 1,
    description: {
      en: 'Start on all fours. Inhale to drop your belly and look up (Cow). Exhale to round your spine and tuck your chin (Cat).',
      es: 'Comience a cuatro patas. Inhale para bajar el vientre y mirar hacia arriba (Vaca). Exhale para redondear la columna y meter la barbilla (Gato).'
    },
    imageUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cat-Cow/images/0.gif',
  },
  {
    id: 'pd_ts',
    name: { en: 'Torso Twists', es: 'Giros de Torso' },
    type: ExerciseType.BLOCK,
    duration: 20,
    reps: 1,
    restBetweenReps: 0,
    description: {
      en: 'Stand with feet shoulder-width apart, arms bent at chest level. Gently twist your torso from side to side.',
      es: 'Párese con los pies separados al ancho de los hombros, los brazos doblados a la altura del pecho. Gire suavemente el torso de un lado a otro.'
    },
    imageUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Torso-Twist/images/0.gif',
  },
  {
    id: 'pd_rest',
    name: { en: 'Rest Period', es: 'Período de Descanso' },
    type: ExerciseType.BLOCK,
    duration: 30,
    reps: 1,
    restBetweenReps: 0,
    description: {
      en: 'Take a moment to recover before the next exercise.',
      es: 'Tómate un momento para recuperarte antes del próximo ejercicio.'
    },
  }
];

export const getPredefinedExercises = (language: Language): Exercise[] => {
  return PREDEFINED_EXERCISES_DATA.map(ex => ({
    ...ex,
    name: ex.name[language],
    description: ex.description[language],
  }));
};

export const DEFAULT_EXERCISE_FORM_STATE = {
  name: '',
  type: ExerciseType.BLOCK,
  duration: '30', 
  reps: '10',     
  restBetweenReps: '0', 
  description: '',
};

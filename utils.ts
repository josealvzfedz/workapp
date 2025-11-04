
import { Exercise, ExerciseType } from './types';

export const calculateTotalExerciseTimeSeconds = (
  exercise: Pick<Exercise, 'type' | 'duration' | 'reps' | 'restBetweenReps'>
): number => {
  if (!exercise) return 0;

  if (exercise.type === ExerciseType.BLOCK) {
    return exercise.duration > 0 ? exercise.duration : 0;
  } else if (exercise.type === ExerciseType.REPETITIVE) {
    if (exercise.reps <= 0 || exercise.duration <= 0) return 0;
    const workTime = exercise.duration * exercise.reps;
    const restTime = exercise.reps > 1 ? (exercise.restBetweenReps > 0 ? exercise.restBetweenReps : 0) * (exercise.reps - 1) : 0;
    return workTime + restTime;
  }
  return 0;
};

export const formatTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

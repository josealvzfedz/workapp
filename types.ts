

export type Language = 'en' | 'es';

export enum ExerciseType {
  BLOCK = "block", 
  REPETITIVE = "repetitive", 
}

// Represents the unified Exercise object used throughout the application.
// It includes data from free-exercise-db and timing info for routines.
export interface Exercise {
  id: string; 
  name: string;
  type: ExerciseType;
  duration: number; 
  reps: number; 
  restBetweenReps: number; 
  description?: string;
  imageUrl?: string; // The primary image URL for display
  
  // Optional fields from free-exercise-db
  level?: string;
  equipment?: string;
  primaryMuscles?: string[];
  secondaryMuscles?: string[];
  images?: string[]; // Full list of available image paths
  category?: string;
  force?: string | null;
  mechanic?: string | null;
}

export interface RoutineExercise extends Exercise {
  routineItemId: string; 
}

// Represents the raw data structure from the exercises.json file
export interface DbExercise {
  id: string;
  name: string;
  force: string | null;
  level: string;
  mechanic: string | null;
  equipment: string | null;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  instructions: string[];
  category: string;
  images?: string[];
}

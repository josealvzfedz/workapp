import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Language } from './types';

export const translations = {
  en: {
    // Welcome Screen
    getStarted: "Get Started",
    welcomeTitle: "Mobility Training",
    welcomeSubtitle: "Track your isometric and eccentric exercises with minimal equipment. Build routines and stay flexible.",
    welcomeTerms: "By continuing, you agree to our Terms of Service and Privacy Policy.",

    // Main Screen / MainView
    mainTitle: "Create Your Warmup Routine",
    mainSubtitle: "Select exercises and build your personalized warmup.",
    currentRoutineSectionTitle: "Your Current Routine",
    exerciseLibrarySectionTitle: "Exercise Library",
    searchExercisePlaceholder: "Search for an exercise...",
    noExercisesFoundMessage: "No exercises found.",
    totalRoutineTimeLabel: "Total Time",
    addToRoutineButton: "Add to Routine",
    removeFromRoutineButtonLabel: "Remove from routine",
    addCustomExerciseButton: "Add New Custom Exercise",
    emptyRoutineMessage: "Your routine is empty. Add some exercises to get started!",
    startRoutineButton: "Start Routine",
    resetRoutineButton: "Reset Routine",
    editButtonLabel: "Edit",
    deleteExerciseButtonLabel: "Delete exercise",
    dragHandleLabel: "Reorder exercise",
    // Fix: Added missing translation keys
    addExercisesSectionTitle: "Add Exercises",
    selectExerciseLabel: "Select an exercise",
    selectExercisePlaceholder: "Select an exercise...",
    exerciseDetailTotal: "Total",
    exerciseDetailReps: "reps",
    exerciseDetailDurationPerRep: "s/rep",
    exerciseDetailRestPerRep: "s rest",
    // FIX: Add missing translation keys to resolve type errors in MainView.tsx.
    errorLoadingExercises: "Error loading exercises. Please try again later.",
    loadingExercisesMessage: "Loading exercises...",
    generatingIllustration: "Generating Illustration...",

    // Workout Screen
    getReady: "Get Ready!",
    firstExercise: "First up: {exerciseName}",
    workoutInProgressTitle: "Workout in Progress",
    goBackButtonLabel: "Go Back",
    muteButtonLabel: "Mute sound",
    unmuteButtonLabel: "Unmute sound",
    pauseButtonLabel: "Pause workout",
    resumeButtonLabel: "Resume workout",
    stopAndFinishButton: "Stop Workout & Finish",
    skipButtonLabel: "Skip Exercise",
    workoutCompletedTitle: "Workout Completed!",
    emptyRoutineTitleWorkout: "Empty Routine",
    workoutCompletedMessage: "Great job staying active!",
    emptyRoutineMessageWorkout: "Add exercises to your routine on the main screen.",
    backToMainScreenButton: "Back to Main Screen",
    pleaseWaitMessage: "Please wait.",
    noIllustrationAvailableMessage: "No illustration available.", 
    phaseWorking: "Working",
    phaseWorkRep: "Work: Rep {currentRep} / {totalReps}",
    phaseRestingRep: "Rest (Rep {currentRep} / {totalReps} done)",
    exerciseOutOf: "Exercise {currentIndexPlusOne} of {totalExercises}",
    translatingDescription: "Translating description...",
    readMore: "Read more...",
    exerciseDescriptionModalTitle: "Exercise Description",

    // Add Exercise Modal
    addCustomExerciseModalTitle: "Add Custom Exercise",
    editCustomExerciseModalTitle: "Edit Custom Exercise",
    closeModalButtonLabel: "Close modal",
    exerciseNameLabel: "Exercise Name",
    exerciseTypeLabel: "Exercise Type",
    exerciseTypeBlockOption: "Single Timed Block (e.g., Jumping Jacks, Rest)",
    exerciseTypeRepetitiveOption: "Reps with Duration (e.g., Squats with rest)",
    durationLabel: "Duration (seconds)",
    durationPerRepLabel: "Duration per Rep (s)",
    repsLabel: "Number of Reps",
    restBetweenRepsLabel: "Rest Between Reps (s)",
    restBetweenRepsHelper: "(0 for no rest)",
    calculatedTotalTimeLabel: "Calculated Total Exercise Time:",
    descriptionLabel: "Description (Optional)",
    cancelButton: "Cancel",
    closeButton: "Close",
    addExerciseButtonModal: "Add Exercise",
    saveChangesButton: "Save Changes",
    errorNameRequired: "Exercise name is required.",
    errorDurationBlockPositive: "Duration for Block type must be a positive number.",
    errorDurationRepPositive: "Duration per rep for Repetitive type must be a positive number.",
    errorRepsPositive: "Number of reps for Repetitive type must be a positive number.",
    errorRestPositive: "Rest between reps must be zero or a positive number.",
    generateWithAI: "Generate with AI",
    generating: "Generating...",
    errorAIGeneration: "Could not generate exercise details. Please check the name or try again.",
    errorAIGenerationImage: "Could not generate illustration.",
    
    // Footer
    footer_appName: "Mobility Training",
    footer_stayActive: "Stay Active!",
    switchToSpanish: "Switch to Spanish",
    switchToEnglish: "Switch to English",
  },
  es: {
    // Welcome Screen
    getStarted: "Empezar",
    welcomeTitle: "Entrenamiento de Movilidad",
    welcomeSubtitle: "Monitorea tus ejercicios isométricos y excéntricos con equipo mínimo. Crea rutinas y mantente flexible.",
    welcomeTerms: "Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad.",

    // Main Screen / MainView
    mainTitle: "Crea Tu Rutina de Calentamiento",
    mainSubtitle: "Selecciona ejercicios y construye tu calentamiento personalizado.",
    currentRoutineSectionTitle: "Tu Rutina de Hoy", 
    exerciseLibrarySectionTitle: "Biblioteca de Ejercicios", 
    searchExercisePlaceholder: "Buscar un ejercicio...",
    noExercisesFoundMessage: "No se encontraron ejercicios.",
    totalRoutineTimeLabel: "Tiempo Total",
    addToRoutineButton: "Añadir a Rutina",
    removeFromRoutineButtonLabel: "Quitar de la rutina",
    addCustomExerciseButton: "Añadir Nuevo Ejercicio Personalizado",
    emptyRoutineMessage: "Tu rutina está vacía. ¡Añade algunos ejercicios para empezar!",
    startRoutineButton: "Iniciar Rutina",
    resetRoutineButton: "Reiniciar Rutina",
    editButtonLabel: "Editar",
    deleteExerciseButtonLabel: "Eliminar ejercicio",
    dragHandleLabel: "Reordenar ejercicio",
    // Fix: Added missing translation keys
    addExercisesSectionTitle: "Añadir Ejercicios",
    selectExerciseLabel: "Selecciona un ejercicio",
    selectExercisePlaceholder: "Selecciona un ejercicio...",
    exerciseDetailTotal: "Total",
    exerciseDetailReps: "reps",
    exerciseDetailDurationPerRep: "s/rep",
    exerciseDetailRestPerRep: "s descanso",
    // FIX: Add missing translation keys to resolve type errors in MainView.tsx.
    errorLoadingExercises: "Error al cargar los ejercicios. Por favor, inténtalo de nuevo más tarde.",
    loadingExercisesMessage: "Cargando ejercicios...",
    generatingIllustration: "Generando ilustración...",

    // Workout Screen
    getReady: "¡Prepárate!",
    firstExercise: "Empezamos con: {exerciseName}",
    workoutInProgressTitle: "Entrenamiento en Progreso",
    goBackButtonLabel: "Volver",
    muteButtonLabel: "Silenciar sonido",
    unmuteButtonLabel: "Activar sonido",
    pauseButtonLabel: "Pausar entrenamiento",
    resumeButtonLabel: "Reanudar entrenamiento",
    stopAndFinishButton: "Detener y Finalizar",
    skipButtonLabel: "Saltar Ejercicio",
    workoutCompletedTitle: "¡Entrenamiento Completado!",
    emptyRoutineTitleWorkout: "Rutina Vacía",
    workoutCompletedMessage: "¡Buen trabajo manteniéndote activo!",
    emptyRoutineMessageWorkout: "Añade ejercicios a tu rutina en la pantalla principal.",
    backToMainScreenButton: "Volver a Pantalla Principal",
    pleaseWaitMessage: "Por favor espera.",
    noIllustrationAvailableMessage: "No hay ilustración disponible.",
    phaseWorking: "Trabajando",
    phaseWorkRep: "Trabajo: Rep {currentRep} / {totalReps}",
    phaseRestingRep: "Descanso (Rep {currentRep} / {totalReps} hecha)",
    exerciseOutOf: "Ejercicio {currentIndexPlusOne} de {totalExercises}",
    translatingDescription: "Traduciendo descripción...",
    readMore: "Leer más...",
    exerciseDescriptionModalTitle: "Descripción del Ejercicio",

    // Add Exercise Modal
    addCustomExerciseModalTitle: "Añadir Ejercicio Personalizado",
    editCustomExerciseModalTitle: "Editar Ejercicio Personalizado",
    closeModalButtonLabel: "Cerrar modal",
    exerciseNameLabel: "Nombre del Ejercicio",
    exerciseTypeLabel: "Tipo de Ejercicio",
    exerciseTypeBlockOption: "Bloque Único Cronometrado (ej., Saltos de Tijera, Descanso)",
    exerciseTypeRepetitiveOption: "Repeticiones con Duración (ej., Sentadillas con descanso)",
    durationLabel: "Duración (segundos)",
    durationPerRepLabel: "Duración por Rep (s)",
    repsLabel: "Número de Reps",
    restBetweenRepsLabel: "Descanso Entre Reps (s)",
    restBetweenRepsHelper: "(0 para sin descanso)",
    calculatedTotalTimeLabel: "Tiempo Total Calculado del Ejercicio:",
    descriptionLabel: "Descripción (Opcional)",
    cancelButton: "Cancelar",
    closeButton: "Cerrar",
    addExerciseButtonModal: "Añadir Ejercicio",
    saveChangesButton: "Guardar Cambios",
    errorNameRequired: "El nombre del ejercicio es obligatorio.",
    errorDurationBlockPositive: "La duración para el tipo Bloque debe ser un número positivo.",
    errorDurationRepPositive: "La duración por repetición para el tipo Repetitivo debe ser un número positivo.",
    errorRepsPositive: "El número de repeticiones para el tipo Repetitivo debe ser un número positivo.",
    errorRestPositive: "El descanso entre repeticiones debe ser cero o un número positivo.",
    generateWithAI: "Generar con IA",
    generating: "Generando...",
    errorAIGeneration: "No se pudieron generar los detalles. Revisa el nombre o inténtalo de nuevo.",
    errorAIGenerationImage: "No se pudo generar la ilustración.",

    // Footer
    footer_appName: "Entrenamiento de Movilidad",
    footer_stayActive: "¡Mantente Activo!",
    switchToSpanish: "Cambiar a Español",
    switchToEnglish: "Cambiar a Inglés",
  }
};

type Translations = typeof translations.en; // Use 'en' as the base structure

interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof Translations, replacements?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es'); // Default language set to Spanish

  const t = (key: keyof Translations, replacements?: Record<string, string | number>): string => {
    let translationForKey = translations[language][key] || translations.en[key] || key;
    if (replacements) {
      Object.keys(replacements).forEach(placeholder => {
        translationForKey = translationForKey.replace(`{${placeholder}}`, String(replacements[placeholder]));
      });
    }
    return translationForKey;
  };

  return React.createElement(I18nContext.Provider, { value: { language, setLanguage, t } }, children);
};

export const useTranslation = (): I18nContextType => {
  const context = useContext<I18nContextType | undefined>(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};

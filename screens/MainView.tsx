import React, { useEffect, useMemo, useState } from 'react';
import { getPredefinedExercises } from '../constants';
import { useTranslation } from '../i18n';
import { Exercise, RoutineExercise } from '../types';
import { calculateTotalExerciseTimeSeconds, formatTime } from '../utils';

const ROUTINE_STORAGE_KEY = 'warmupRoutine';

const createRoutineItemId = () => `routine_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

const MainView: React.FC = () => {
  const { language, t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [routine, setRoutine] = useState<RoutineExercise[]>([]);

  // Load stored routine on mount
  useEffect(() => {
    try {
      const storedRoutine = localStorage.getItem(ROUTINE_STORAGE_KEY);
      if (storedRoutine) {
        const parsed: RoutineExercise[] = JSON.parse(storedRoutine);
        if (Array.isArray(parsed)) {
          setRoutine(parsed);
        }
      }
    } catch (error) {
      console.warn('Failed to parse stored routine', error);
    }
  }, []);

  // Persist routine whenever it changes
  useEffect(() => {
    localStorage.setItem(ROUTINE_STORAGE_KEY, JSON.stringify(routine));
  }, [routine]);

  const libraryExercises = useMemo(() => getPredefinedExercises(language), [language]);

  const filteredExercises = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) {
      return libraryExercises;
    }

    return libraryExercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(normalizedQuery)
    );
  }, [libraryExercises, searchQuery]);

  const addToRoutine = (exercise: Exercise) => {
    setRoutine((current) => {
      const newItem: RoutineExercise = { ...exercise, routineItemId: createRoutineItemId() };
      return [...current, newItem];
    });
  };

  const removeFromRoutine = (routineItemId: string) => {
    setRoutine((current) => current.filter((item) => item.routineItemId !== routineItemId));
  };

  const resetRoutine = () => {
    setRoutine([]);
  };

  const totalTimeSeconds = routine.reduce(
    (accumulator, exercise) => accumulator + calculateTotalExerciseTimeSeconds(exercise),
    0
  );

  const handleStartRoutine = () => {
    if (!routine.length) {
      return;
    }
    // Placeholder: In the original project this would open the workout screen.
    // For now we simply announce the routine start to the user.
    window.alert(t('pleaseWaitMessage'));
  };

  return (
    <div className="flex flex-col gap-10">
      <header className="space-y-2 text-center sm:text-left">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{t('mainTitle')}</h2>
        <p className="text-sm text-slate-600 sm:text-base">{t('mainSubtitle')}</p>
      </header>

      <section aria-labelledby="routine-title" className="space-y-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 id="routine-title" className="text-lg font-medium text-slate-900">
              {t('currentRoutineSectionTitle')}
            </h3>
            <p className="text-sm text-slate-500">
              {t('totalRoutineTimeLabel')}: {formatTime(totalTimeSeconds)}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleStartRoutine}
              className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              disabled={!routine.length}
            >
              {t('startRoutineButton')}
            </button>
            <button
              type="button"
              onClick={resetRoutine}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-400 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
              disabled={!routine.length}
            >
              {t('resetRoutineButton')}
            </button>
          </div>
        </div>

        {routine.length === 0 ? (
          <p className="text-sm text-slate-500">{t('emptyRoutineMessage')}</p>
        ) : (
          <ul className="grid gap-3">
            {routine.map((exercise) => (
              <li
                key={exercise.routineItemId}
                className="flex flex-col gap-2 rounded-md border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h4 className="text-base font-medium text-slate-900">{exercise.name}</h4>
                  <p className="text-xs text-slate-500">
                    {t('exerciseDetailTotal')}: {formatTime(calculateTotalExerciseTimeSeconds(exercise))}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromRoutine(exercise.routineItemId)}
                  className="self-start rounded-md border border-transparent px-3 py-2 text-xs font-medium text-rose-600 transition hover:bg-rose-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                >
                  {t('removeFromRoutineButtonLabel')}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section aria-labelledby="library-title" className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 id="library-title" className="text-lg font-medium text-slate-900">
            {t('exerciseLibrarySectionTitle')}
          </h3>
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={t('searchExercisePlaceholder')}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1 sm:w-64"
          />
        </div>

        {filteredExercises.length === 0 ? (
          <p className="text-sm text-slate-500">{t('noExercisesFoundMessage')}</p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredExercises.map((exercise) => (
              <li key={exercise.id} className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="space-y-1">
                  <h4 className="text-base font-medium text-slate-900">{exercise.name}</h4>
                  {exercise.description && (
                    <p className="text-xs text-slate-500 line-clamp-3">{exercise.description}</p>
                  )}
                  <p className="text-xs text-slate-500">
                    {t('exerciseDetailTotal')}: {formatTime(calculateTotalExerciseTimeSeconds(exercise))}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => addToRoutine(exercise)}
                  className="mt-auto rounded-md bg-sky-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                >
                  {t('addToRoutineButton')}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default MainView;

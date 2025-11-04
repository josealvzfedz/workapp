import React, { useState, useEffect } from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import MainView from './screens/MainView'; // New Main View
// import MainScreen from './screens/MainScreen'; // Old MainScreen removed
// import WorkoutScreen from './screens/WorkoutScreen'; // WorkoutScreen is now launched from MainView
// import { Exercise, RoutineExercise, Language, LocalizedString } from './types'; // Types will be used in MainView
// import { getPredefinedExercises } from './constants'; // Constants will be used in MainView
import { I18nProvider, useTranslation } from './i18n';

// AppView type is no longer needed here as App.tsx only decides between Welcome and MainView.
// const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`; // Moved to MainView

const AppContent: React.FC = () => {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState<boolean>(true); // Show by default

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWarmupWelcomeScreen');
    if (hasSeenWelcome === 'true') {
      setShowWelcomeScreen(false);
    }
  }, []);

  const handleWelcomeComplete = () => {
    localStorage.setItem('hasSeenWarmupWelcomeScreen', 'true');
    setShowWelcomeScreen(false);
  };
  
  // Core app logic (states for exercises, routine, handlers) has been moved to MainView.tsx
  // App.tsx now just handles the initial WelcomeScreen vs MainView rendering.

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {showWelcomeScreen ? (
          <WelcomeScreen onGetStarted={handleWelcomeComplete} />
        ) : (
          <MainView />
        )}
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <I18nProvider>
      <AppContent />
      <AppFooter />
    </I18nProvider>
  );
};

const AppFooter: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <footer className="text-center py-6 text-sm text-slate-500 border-t border-slate-300">
        <p>&copy; {new Date().getFullYear()} {t('footer_appName')}. {t('footer_stayActive')}</p>
        <button 
          onClick={toggleLanguage}
          className="mt-2 px-3 py-1.5 bg-sky-100 text-sky-700 hover:bg-sky-200 rounded-md transition-colors text-xs font-medium"
          aria-label={t(language === 'en' ? 'switchToSpanish' : 'switchToEnglish')}
        >
          {language === 'en' ? 'Español' : 'English'}
        </button>
      </footer>
  );
}

export default App;
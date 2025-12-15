import React, { useEffect, useState } from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import MainView from './screens/MainView';
import { I18nProvider, useTranslation } from './i18n';

const AppContent: React.FC = () => {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

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

const AppFooter: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <footer className="text-center py-6 text-sm text-slate-500 border-t border-slate-300">
      <p>
        &copy; {new Date().getFullYear()} {t('footer_appName')}. {t('footer_stayActive')}
      </p>
      <button
        onClick={toggleLanguage}
        className="mt-2 px-3 py-1.5 bg-sky-100 text-sky-700 hover:bg-sky-200 rounded-md transition-colors text-xs font-medium"
        aria-label={t(language === 'en' ? 'switchToSpanish' : 'switchToEnglish')}
      >
        {language === 'en' ? 'Español' : 'English'}
      </button>
    </footer>
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

export default App;

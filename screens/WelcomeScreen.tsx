import React from 'react';
import { useTranslation } from '../i18n';

type WelcomeScreenProps = {
  onGetStarted: () => void;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 text-center">
      <div className="max-w-xl space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          {t('welcomeTitle')}
        </h1>
        <p className="text-base text-slate-600 sm:text-lg">
          {t('welcomeSubtitle')}
        </p>
        <p className="text-xs text-slate-400 sm:text-sm">
          {t('welcomeTerms')}
        </p>
      </div>
      <button
        type="button"
        onClick={onGetStarted}
        className="rounded-md bg-sky-600 px-6 py-3 text-sm font-medium text-white shadow transition hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
      >
        {t('getStarted')}
      </button>
    </div>
  );
};

export default WelcomeScreen;

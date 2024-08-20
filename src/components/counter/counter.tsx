import { t } from 'i18next';

import { useCounterStore } from '@/contexts/counter';

import { Button } from '../ui/button';

export const Counter = () => {
  const { count, inc } = useCounterStore();

  return (
    <div className="flex flex-col items-center gap-5">
      <h2>{t('components.counter.title')}</h2>
      <h4>{count}</h4>
      <Button onClick={inc} className="text-xl text-white" data-testid="one-up-button">
        {t('components.counter.up_button')}
      </Button>
    </div>
  );
};

import { t } from 'i18next';

import { useCounterStore } from '@/contexts/counter';

import { Button } from '../ui';

export const Counter = () => {
  const { count, inc } = useCounterStore();

  return (
    <div>
      <h2>{t('components.counter.title')}</h2>
      <h4>{count}</h4>
      <Button onClick={inc} className="text-xl text-white">
        {t('components.counter.up_button')}
      </Button>
    </div>
  );
};

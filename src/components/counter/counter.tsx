import { useCounterStore } from '@/contexts/counter';
import { t } from 'i18next';

export const Counter = () => {
  const { count, inc } = useCounterStore();

  return (
    <div>
      <h2>{t('components.counter.title')}</h2>
      <h4>{count}</h4>
      <button onClick={inc}>{t('components.counter.up_button')}</button>
    </div>
  );
};

import NiceModal from '@ebay/nice-modal-react';
import { t } from 'i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { ConfirmModal } from '@/components/modals/confirm-modal';
import { Button } from '@/components/ui';
import { useCounterStore } from '@/contexts/counter';

export const ModalExample = () => {
  const { count, dec, inc } = useCounterStore();

  const handleOnclick = () => {
    NiceModal.show(ConfirmModal, {
      title: t('pages.welcome.modal_example.confirm_modal.title'),
      description: t('pages.welcome.modal_example.confirm_modal.description'),
      subtitle: t('pages.welcome.modal_example.confirm_modal.subtitle'),
      okText: t('common.yes'),
      cancelText: t('common.no'),
    });
  };

  return (
    <div className="flex w-full items-center justify-center gap-10 p-5">
      <Button onClick={handleOnclick}>{t('pages.welcome.modal_example.confirm_modal.title')}</Button>
      <div className="flex flex-col items-center gap-2">
        <Button size="sm" variant="outline" onClick={inc}>
          <ChevronUp />
        </Button>
        <span className="px-2 text-2xl">{count}</span>
        <Button size="sm" variant="outline" onClick={dec}>
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
};

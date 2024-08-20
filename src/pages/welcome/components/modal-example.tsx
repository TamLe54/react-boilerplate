import NiceModal from '@ebay/nice-modal-react';
import { t } from 'i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { ConfirmModal } from '@/components/modals/confirm-modal';
import { Button } from '@/components/ui/button';
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
    <div className="flex w-full flex-col items-center justify-center gap-5 p-5">
      <Button onClick={handleOnclick}>{t('pages.welcome.modal_example.confirm_modal.title')}</Button>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={dec}>
          <ChevronLeft />
        </Button>
        <span className="px-2 text-2xl">{count}</span>
        <Button size="sm" variant="outline" onClick={inc}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

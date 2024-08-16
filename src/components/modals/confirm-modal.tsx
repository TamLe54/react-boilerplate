import NiceModal, { useModal } from '@ebay/nice-modal-react';

import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';

interface ConfirmModalProps {
  title: string;
  subtitle?: string;
  description: string;
  okText: string;
  cancelText: string;
}

export const ConfirmModal = NiceModal.create(
  ({ title, description, okText, cancelText, subtitle }: ConfirmModalProps) => {
    const modal = useModal();

    const handleResolve = () => {
      modal.resolve();
      modal.hide();
    };

    const handleReject = () => {
      modal.reject();
      modal.hide();
    };

    return (
      <Dialog
        open={modal.visible}
        onOpenChange={open => {
          if (!open) {
            modal.reject();
            modal.hide();
          }
        }}
      >
        <DialogContent className="sm:max-w-[425px]" onInteractOutside={e => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{subtitle}</DialogDescription>
          </DialogHeader>
          <div>{description}</div>
          <DialogFooter>
            <div className="flex w-full items-center justify-end gap-3">
              <Button variant="secondary" onClick={handleReject}>
                {cancelText}
              </Button>
              <Button variant="default" onClick={handleResolve}>
                {okText}
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
);

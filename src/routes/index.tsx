import { createFileRoute, ErrorComponent, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

import { Loading } from '@/components';

const IndexComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: '/welcome' });
  }, [navigate]);
};

export const Route = createFileRoute('/')({
  component: IndexComponent,
  errorComponent: ErrorComponent,
  pendingComponent: Loading,
});

import { createFileRoute, ErrorComponent, lazyRouteComponent } from '@tanstack/react-router';

import { Loading } from '@/components';

export const Route = createFileRoute('/_authenticated/welcome')({
  component: lazyRouteComponent(() => import('@/pages/welcome/components'), 'WelcomePage'),
  errorComponent: ErrorComponent,
  pendingComponent: Loading,
});

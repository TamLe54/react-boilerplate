import { Loading } from '@/components';
import { createFileRoute, ErrorComponent, lazyRouteComponent } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/welcome')({
  component: lazyRouteComponent(() => import('@/pages/welcome/components'), 'WelcomePage'),
  errorComponent: ErrorComponent,
  pendingComponent: Loading,
});

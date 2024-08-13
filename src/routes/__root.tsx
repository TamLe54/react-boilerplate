import { createRootRoute, Outlet } from '@tanstack/react-router';

import { NotFound } from '@/components';

const RootComponent = () => {
  return <Outlet />;
};

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

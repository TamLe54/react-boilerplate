import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { routeTree } from './routeTree.gen';

import { createRouter, RouterProvider } from '@tanstack/react-router';
import { AppInit } from './app';
import './styles/index.css';
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppInit>
      <RouterProvider router={router} />
    </AppInit>
  </StrictMode>,
);

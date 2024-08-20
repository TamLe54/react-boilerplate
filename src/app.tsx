import 'react-toastify/dist/ReactToastify.css';

import NiceModal from '@ebay/nice-modal-react';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from './components';
import { TanstackQueryWrapper } from './contexts/tanstack-query';

export const AppInit = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider storageKey="vite-ui-theme" defaultTheme="system">
      <TanstackQueryWrapper>
        <NiceModal.Provider>{children}</NiceModal.Provider>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          position="top-center"
          stacked
          closeButton={false}
          pauseOnHover
        />
      </TanstackQueryWrapper>
    </ThemeProvider>
  );
};

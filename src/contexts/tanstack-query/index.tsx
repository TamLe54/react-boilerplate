import type { DefaultOptions } from '@tanstack/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
  },
};

export const appQueryClient = new QueryClient({ defaultOptions: queryConfig });

export const TanstackQueryWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={appQueryClient}>
      {children}
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
};

const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

/**
 * QueryWrapper support for testing tanstack-query hooks
 * @returns
 */
export const mockQueryWrapper = () => {
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={mockQueryClient}>{children}</QueryClientProvider>
  );
};

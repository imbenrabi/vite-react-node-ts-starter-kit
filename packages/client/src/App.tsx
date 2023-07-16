import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import {trpc} from './utils'
import { Root } from './Root';

export const App = () => {
  const [queryClient] = React.useState(() => new QueryClient());
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3001/trpc',
          fetch(url, options) {
            return fetch(url, {
              ...options,
              credentials: 'include', //required to avoid CORS
            });
          },
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              authorization: 'mocked-token',
            };
          },
        }),
      ],
    }),
  );

  return <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  </trpc.Provider>
};

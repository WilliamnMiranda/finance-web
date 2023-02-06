import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import Theme from '../theme/config'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { StorageMobileContext } from '../contexts/MobileContext';
import { ModalStorage } from '../contexts/ModalContext';
import { useState } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <ModalStorage>
      <StorageMobileContext>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider theme={Theme}>
              <Component {...pageProps} />
            </ThemeProvider>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </Hydrate>
        </QueryClientProvider>
      </StorageMobileContext>
    </ModalStorage>
  )
}

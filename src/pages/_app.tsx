import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import { ToastContainer } from '@/components/notifications';
import { createClient, Provider as UrqlProvider } from 'urql';
import { GlobalStyles, theme } from '@/css';
import { AuthProvider } from '@/context/authContext';
import Header from '@/components/layout/Header';
import { AppContainer } from '@/components/layout';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';
import 'react-toastify/dist/ReactToastify.min.css';

const client = createClient({
  url: '/api/graphql',
  fetchOptions: () => ({ headers: { 'X-Schema-Preview': 'partial-update-mutation' } }),
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const renderHeader = !['/photo/[photo-id]'].includes(router.pathname);

  return (
    <>
      <Head>
        <title>Photo Share</title>
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      </Head>
      <StyleSheetManager disableVendorPrefixes>
        <>
          <UrqlProvider value={client}>
            <NextAuthProvider session={pageProps.session}>
              <AuthProvider>
                <ThemeProvider theme={theme}>
                  {renderHeader && <Header />}
                  <AppContainer>
                    <Component {...pageProps} />
                  </AppContainer>
                  <GlobalStyles />
                  <ToastContainer />
                </ThemeProvider>
              </AuthProvider>
            </NextAuthProvider>
          </UrqlProvider>
        </>
      </StyleSheetManager>
    </>
  );
}

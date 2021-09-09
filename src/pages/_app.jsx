/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';

import store from '@root/store/store';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';

const App = (props) => {
  const queryClientRef = useRef;
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>App Name</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <Provider store={store}>{getLayout(<Component {...pageProps} />, pageProps)}</Provider>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;

/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';

import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';
import StyledInput from '@root/components/Input/StyledInput';
import StyledCheckbox from '@root/components/Checkbox/StyledCheckbox';

const App = (props) => {
  const queryClientRef = useRef;
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>App Name</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <GlobalStyles />
        <StyledCheckbox />
        <StyledInput icon />
      </ThemeProvider>
    </>
  );
};

export default App;

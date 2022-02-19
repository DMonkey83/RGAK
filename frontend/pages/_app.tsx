import NProgress from 'nprogress';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import { ApolloProvider } from '@apollo/client';

import '../components/styles/nprogress.css';
import Page from '../components/Page';
import  { useApollo } from '../lib/withData';


Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Page>
        <Component>{pageProps}</Component>
      </Page>
    </ApolloProvider>
  );
}

export default MyApp;
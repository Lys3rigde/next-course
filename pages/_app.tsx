import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>MyTop - Our Best Top</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
      <meta property="og:locale" content="ru_RU" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;

import { AppProps } from 'next/app';
import { ExperimentProvider } from '../context/ExperimentContext';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ExperimentProvider>
      <Head>
        <title>Психофизиологический эксперимент</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chirp:wght@400;500;700&display=swap" />
      </Head>
      <Component {...pageProps} />
    </ExperimentProvider>
  );
}

export default MyApp;
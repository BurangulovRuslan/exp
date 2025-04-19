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
      </Head>
      <Component {...pageProps} />
    </ExperimentProvider>
  );
}

export default MyApp;
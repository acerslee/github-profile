import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
         <title>Github Profile</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Visualization of a user's Github profile"></meta>
          <meta charSet="UTF-8"></meta>
          <meta name="msapplication-TileColor" content="#1A1E22" />
          <meta name="theme-color" content="#0070f3" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp

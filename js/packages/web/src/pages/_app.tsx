import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.less';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pixel Bears Club</title>
        <meta content="This is the Pixel Bears Club. 299+ randomly generated pixel bears on the Solana Blockchain." name="description"></meta>
      </Head>
      <div style={ 
          { 
            margin: 10,
            padding: 10,
            border:2,
            borderColor: 'white',
            textAlign: 'center'
          }
        }>
        <h1>Wellcome to the Pixel Bears Club.</h1>
          <p></p>
      </div>
      <div id="root">
        <Component {...pageProps} />
      </div>
      <div style={ 
          { 
            margin: 10,
            padding: 10,
            border:2,
            borderColor: 'white',
            textAlign: 'center'
          }
        }>
        <a href="https://twitter.com/PixelBearsClub"><img src="twitter.png" width="96" height="96"></img></a>
      </div>
    </>
  );
}

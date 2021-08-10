import 'reflect-metadata'
import '../styles/globals.css'
import '../styles/theme.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp;


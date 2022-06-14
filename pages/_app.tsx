import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <MantineProvider>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </MantineProvider>
  )
}

export default MyApp

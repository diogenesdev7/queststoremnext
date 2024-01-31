import Layout from '@/components/Layout'
import { LojaProvider } from '@/context/LojaContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LojaProvider>
      <Layout>
        <Head>
          <link rel='icon' href='../assets/joy.ico' />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      
                  <script
            src="https://code.jquery.com/jquery-3.7.1.slim.js"
            integrity="sha256-UgvvN8vBkgO0luPSUl2s8TIlOSYRoGFAX4jlCIm9Adc="
            crossorigin="anonymous"></script>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </LojaProvider>
  )
}

import Layout from '@/components/Layout'
import { LojaProvider } from '@/context/LojaContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
export default function App({ Component, pageProps }: AppProps) {
  

  return (
    <LojaProvider>
      <Layout>
        
        <Component {...pageProps} />
      </Layout>

      <Script
        id='meu-script'
        src="https://code.jquery.com/jquery-3.7.1.slim.js"
        integrity="sha256-UgvvN8vBkgO0luPSUl2s8TIlOSYRoGFAX4jlCIm9Adc="
        crossOrigin="anonymous"
      />
      <Script id='meu-script2' strategy="lazyOnload">
        {`
          // Adicionando links no DOM
          var linkIcon = document.createElement('link');
          linkIcon.rel = 'icon';
          linkIcon.href = '/assets/joy.ico'; // Ajuste o caminho do ícone conforme necessário
          document.head.appendChild(linkIcon);

          var linkPreconnect1 = document.createElement('link');
          linkPreconnect1.rel = 'preconnect';
          linkPreconnect1.href = 'https://fonts.googleapis.com';
          document.head.appendChild(linkPreconnect1);

          var linkPreconnect2 = document.createElement('link');
          linkPreconnect2.rel = 'preconnect';
          linkPreconnect2.href = 'https://fonts.gstatic.com';
          linkPreconnect2.crossOrigin = 'anonymous';
          document.head.appendChild(linkPreconnect2);

          var linkStylesheet = document.createElement('link');
          linkStylesheet.rel = 'stylesheet';
          linkStylesheet.href = 'https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:wght@300;400;500;700&display=swap';
          document.head.appendChild(linkStylesheet);
        `}
      </Script>
    </LojaProvider>
  )
}

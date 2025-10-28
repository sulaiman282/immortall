import "@/styles/globals.css";
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <Toaster 
        position="bottom-center" 
        reverseOrder={false} 
        toastOptions={{
          duration: 4000,
          style: {
            background: '#121212',
            color: '#fff',
            border: '1px solid #333333',
          },
          success: {
            style: {
              background: '#333333',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: '#222222',
              color: '#fff',
            },
          },
        }}
      />
    </>
  );
}
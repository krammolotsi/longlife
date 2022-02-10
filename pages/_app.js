import '../styles/globals.css';
//import { SessionProvider } from 'next-auth/react';
//removed session from inside pageProps
function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    // <SessionProvider session={session}>
    //   <Component {...pageProps} />
    // </SessionProvider>
    <Component {...pageProps} />
  );
}

export default MyApp;

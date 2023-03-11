import cn from 'classnames';
import type { AppProps } from 'next/app';

import { Raleway, Martel_Sans } from '@next/font/google';

import '../styles/globals.css';

const firaCode = Raleway({
  weight: '400',
});

const dmSans = Martel_Sans({
  weight: '400',
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={cn(firaCode.className, dmSans.className)}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;

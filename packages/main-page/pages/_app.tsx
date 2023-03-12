import type { AppProps } from 'next/app';
import cn from 'classnames';

import { Raleway, Martel_Sans } from '@next/font/google';

import '../styles/globals.css';
import '../styles/output.css';

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

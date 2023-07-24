import { Nunito_Sans, Roboto_Mono } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  preload: false,
  weight: ['400', '500', '700', '900'],
});

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export { nunitoSans, robotoMono };

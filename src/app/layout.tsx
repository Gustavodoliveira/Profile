import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { GlobalStyled } from './globalStyle';
import ThemeClient from './Theme';
import StyledComponentsRegistry from './registry';

const inter = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Profile',
  description: 'My profile',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyled />
          <ThemeClient>
            <Header />
            {children}
            <Footer />
          </ThemeClient>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

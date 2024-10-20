import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navigation from '@/components/navigation/navigation';
import {ThemeProvider} from '@/components/theme-provider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Home | d093w1z',
  description: 'Resume of Mukesh M. Tandale',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className='py-20 max-w-6xl mx-auto'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

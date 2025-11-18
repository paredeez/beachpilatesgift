import './globals.css';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Beach Pilates Melbourne - Gift Vouchers',
  description: 'Purchase gift vouchers for Beach Pilates classes in Melbourne',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.variable}>{children}</body>
    </html>
  );
}


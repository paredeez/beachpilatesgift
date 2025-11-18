import './globals.css';

export const metadata = {
  title: 'Beach Pilates Melbourne - Gift Vouchers',
  description: 'Purchase gift vouchers for Beach Pilates classes in Melbourne',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


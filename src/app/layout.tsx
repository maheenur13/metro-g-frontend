import Providers from '@/lib/Providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metro - G',
  description: 'Your all in one car service solution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </Providers>
  );
}

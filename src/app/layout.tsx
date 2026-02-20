import type { Metadata } from 'next';
import { Cinzel_Decorative } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  title: 'Parças Do Dota – PDD',
  description: 'Clã PDD',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${cinzel.variable}`}>
      <body className="antialiased font-sans bg-black text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

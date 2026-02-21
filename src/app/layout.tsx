import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-cinzel', // Mantendo o CSS var antigo para auto-aplicar globalmente
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
    <html lang="pt-BR" className={`scroll-smooth ${orbitron.variable}`}>
      <body className="antialiased font-sans bg-black text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

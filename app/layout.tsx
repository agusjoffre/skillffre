import ThemeProvider from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Skillffre',
  description:
    'SkillFFre is a dynamic platform revolutionizing skill exchange and collaboration. Seamlessly connecting individuals worldwide, SkillFFre empowers users to showcase their talents, seek assistance, and embark on collaborative projects. With a user-centric approach, SkillFFre fosters a vibrant community where expertise meets opportunity. Join SkillFFre today and unlock a world of boundless possibilities for skill exchange and collaboration',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-background min-h-screen font-sans antialiased', inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

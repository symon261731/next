import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Layout } from '@/components/Layout/Layout';

const inter = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'main layout',
    description: 'main layout'
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang='ru'>
            <body className={inter.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}

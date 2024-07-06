import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'main layout',
    description: 'main layout'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return <section>{children}</section>;
}

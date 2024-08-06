'use client';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Header } from './Header/Header';
import { GithubLinkProvider } from '@/context/GithubLinkContext/GithubLinkProvider';

interface ILayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}
export const Layout = ({ children, ...props }: ILayoutProps) => {
    return (
        <div {...props}>
            <GithubLinkProvider link='https://github.com/symon261731'>
                <Header />
                <section>{children}</section>
            </GithubLinkProvider>
        </div>
    );
};

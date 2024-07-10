import classes from './Layout.module.css';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Header } from './Header/Header';

interface ILayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}
export const Layout = ({ children, ...props }: ILayoutProps) => {
    return (
        <div {...props}>
            <Header />
            <section>{children}</section>
        </div>
    );
};

import {
    GithubLinkContext,
    IGithubLinkContext
} from '@/context/GithubLinkContext/GithubLinkContext';
import { ReactNode } from 'react';

interface IProps extends IGithubLinkContext {
    children: ReactNode;
}

export const GithubLinkProvider = ({ link, children }: IProps) => {
    return <GithubLinkContext.Provider value={{ link }}>{children}</GithubLinkContext.Provider>;
};

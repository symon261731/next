'use client';

import { createContext } from 'react';

export interface IGithubLinkContext {
    link: string;
}

export const GithubLinkContext = createContext<IGithubLinkContext>({ link: '' });

'use client';
import classes from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { GithubLinkContext } from '@/context/GithubLinkContext/GithubLinkContext';

export const Header = () => {
    const { link } = useContext(GithubLinkContext);

    return (
        <div className={classes.header}>
            <h2 className={classes.title}>.my_blog</h2>
            <Link href={link} target={'_blank'}>
                <Image src={'/github.svg'} alt={'git'} width={24} height={24} />
            </Link>
        </div>
    );
};

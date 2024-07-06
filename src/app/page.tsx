import Image from 'next/image';
import type { Metadata } from 'next';
import { Card } from '@/components/Card/Card';
import classes from './app.module.css';
import { BigLike } from '@/components/BigLike/BigLike';

const data = [
    {
        id: '1',
        title: 'Как работать с CSS Grid',
        createdAt: '1 месяц назад',
        kind: 'Front-end',
        text: 'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
        url: '/testImage.png',
        likes: '4',
        timeToRead: '3'
    },
    {
        id: '2',
        title: 'Как работать с CSS Grid',
        createdAt: '1 месяц назад',
        kind: 'Front-end',
        text: 'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
        url: '/testImage.png',
        likes: '4',
        timeToRead: '3'
    },
    {
        id: '3',
        title: 'Как работать с CSS Grid',
        createdAt: '1 месяц назад',
        kind: 'Front-end',
        text: 'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
        url: '/testImage.png',
        likes: '4',
        timeToRead: '3'
    }
];

export const metadata: Metadata = {
    title: 'main page title',
    description: 'main page description'
};

export default function Home() {
    return (
        <main>
            <div className={classes.main}>
                {data.map((info) => (
                    <Card info={info} key={info.id} />
                ))}
            </div>
        </main>
    );
}

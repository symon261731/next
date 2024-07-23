import type { Metadata } from 'next';
import { Card } from '@/components/Card/Card';
import classes from './app.module.css';
import { data } from './mockData';

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

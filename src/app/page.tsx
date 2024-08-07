import type { Metadata } from 'next';
import { Card } from '@/components/Card/Card';
import classes from './app.module.css';
import { customApi } from '@/customApi/customApi';
import { string } from 'prop-types';

export const metadata: Metadata = {
    title: 'main page title',
    description: 'main page description'
};

async function getPostsData() {
    const api = new customApi();
    return await api.getPosts();
}

export default async function Home() {
    const customData = await getPostsData();

    return (
        <main>
            <div className={classes.main}>
                {customData?.map((info) => (
                    <Card
                        info={{
                            id: String(info.id),
                            likes: '3',
                            text: info.body,
                            title: info.title,
                            createdAt: '12.01.2023',
                            kind: 'some',
                            url: '/testImage.png',
                            timeToRead: '3'
                        }}
                        key={info.id}
                    />
                ))}
            </div>
        </main>
    );
}

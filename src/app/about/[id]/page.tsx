import { customApi } from '@/customApi/customApi';
import { Text } from '@/components/Text/Text';
import Image from 'next/image';
import classes from './styles.module.css';
import { CommentList } from './components/CommentList';
import { ReviewForm } from '@/components/ReviewForm/ReviewForm';

export async function generateStaticParams() {
    const api = new customApi();
    return (await api.getPosts()).map(({ id }) => ({ id: String(id) }));
}

async function getPostInfo(id: number | string) {
    const api = new customApi();
    return await api.getPostInfoById(id);
}

async function getComments(postId: number | string) {
    const api = new customApi();
    return await api.getCommentByPostId(postId);
}

// @ts-ignore
export default async function Page({ params }) {
    const { title, body } = await getPostInfo(params.id);
    const data = await getComments(params.id);

    return (
        <div className={classes.container}>
            <Text className={classes.title} kind={'title'}>
                {title}
            </Text>
            <div className={classes.subtitleContainer}>
                <Text kind={'subtitle'}>Front-end</Text>
                <Text kind={'subtitle'}>1 месяц назад</Text>
                <Text kind={'subtitle'}>3 минуты</Text>
            </div>
            <Image src={'/testImage.png'} alt={'testImage'} width={687} height={440} />
            <Text className={classes.textContent} kind={'text'}>
                {body}
            </Text>
            <CommentList data={data} />
            <ReviewForm postId={params.id} />
        </div>
    );
}

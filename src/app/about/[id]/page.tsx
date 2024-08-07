import { customApi } from '@/customApi/customApi';
import { Text } from '@/components/Text/Text';
import Image from 'next/image';
import classes from './styles.module.css';

async function getPostInfo(id: number | string) {
    const api = new customApi();
    return await api.getPostInfoById(id);
}

export default async function Page({ params }) {
    const { title, body } = await getPostInfo(params.id);

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
            <Text kind={'text'}>{body}</Text>
        </div>
    );
}

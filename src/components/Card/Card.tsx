import classes from './Card.module.css';
import Image from 'next/image';
import { Text } from '@/components/Text/Text';
import { Likes } from '@/components/Likes/Likes';
import { ICardProps } from './Card.props';
import { Button } from '@/components/Button/Button';
import Link from 'next/link';

export const Card = ({ info }: ICardProps) => {
    const { title, createdAt, text, kind, url, timeToRead } = info;
    return (
        <div className={classes.card}>
            <div className={classes.imageContainer}>
                <Image src={url} alt='image' width={300} height={192} />
            </div>
            <div className={classes.textContent}>
                <div className={classes.underImageContent}>
                    <div className={classes.shortInfo}>
                        <Text kind={'subtitle'}>{kind}</Text>
                        <Text kind={'subtitle'}>{createdAt}</Text>
                    </div>
                    <Likes />
                </div>
                <Text kind={'title'}>{title}</Text>
                <Text>{text}</Text>
            </div>
            <div className={classes.footer}>
                <Text kind={'subtitle'}>{timeToRead} минуты</Text>
                <Link href={`/about/${info.id}`}>
                    <Button hasArrow>Читать</Button>
                </Link>
            </div>
        </div>
    );
};

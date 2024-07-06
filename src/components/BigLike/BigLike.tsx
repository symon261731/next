'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import classes from './BigLike.module.css';
import classNames from 'classnames';
import { customApi } from '@/customapi/customApi';

interface IProps {
    id: string;
}

export const BigLike = ({ id }: IProps) => {
    const [isAlreadyClicked, setIsAlreadyClicked] = useState(false);

    const api = new customApi();
    const onLikeClick = () => {
        api.patchLike(id).then((statusOk) => {
            if (statusOk) {
                setIsAlreadyClicked(true);
            }
        });
    };

    return (
        <Button onClick={onLikeClick} kind={'clear'}>
            <Image
                className={classNames(classes.bigLike, { [classes.clickedLike]: isAlreadyClicked })}
                src='/like.svg'
                alt='like'
                width={16}
                height={16}
            />
        </Button>
    );
};

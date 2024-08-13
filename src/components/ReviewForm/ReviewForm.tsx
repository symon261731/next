'use client';
import { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import classes from './ReviewForm.module.css';
import { customApi } from '@/customApi/customApi';
import * as yup from 'yup';
import classNames from 'classnames';

const api = new customApi();

const requiredText = 'Неообходимо заполнить';
const schema = yup.object({
    name: yup.string().required(requiredText),
    comment: yup.string().required(requiredText)
});

const defaultValues = {
    name: '',
    comment: ''
};

interface IProps {
    postId: string;
}
export const ReviewForm = memo(({ postId }: IProps) => {
    const methods = useForm({ defaultValues });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = (data) => {
        setIsSubmitting(true);
        console.log(data);
        api.addCommentForPost(postId, data).then(() => {
            methods.reset(defaultValues);
            setIsSubmitting(false);
        });
    };

    return (
        <form className={classes.reviewForm} onSubmit={methods.handleSubmit(onSubmit)}>
            <input className={classes.input} {...methods.register('name')} placeholder={'Имя'} />
            <textarea
                className={classes.textArea}
                {...methods.register('comment')}
                placeholder={'Комментарий'}
            ></textarea>
            <button
                disabled={isSubmitting}
                className={classNames(classes.button, isSubmitting && classes.disabledButton)}
                type='submit'
            >
                Отправить
            </button>
        </form>
    );
});

ReviewForm.displayName = 'ReviewForm';

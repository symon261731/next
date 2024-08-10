import { Comment } from "@/components/Comment/Comment";
import { Text } from "@/components/Text/Text";
import { memo } from "react";
import classes from './CommentList.module.css';

interface IProps {
    data: any[]
}

export const CommentList = memo(({data}: IProps) => {

    return (
        <div >
            <Text className={classes.title} kind="title">Комментарии</Text>
            <div className={classes.commentList}>
            {data?.map(({id,name,email,body})=> (<Comment key={id} name={name} email={email} body={body}/>))}
            </div>
        </div>
    );
});

CommentList.displayName = 'CommentList';
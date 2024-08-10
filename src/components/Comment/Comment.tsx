import { Text } from '../Text/Text';
import classes from './Comment.module.css';

interface IProps {
    name: string;
    email: string;
    body: string;
}; 

export const Comment = ({name,email,body}:IProps) => {
    

    return (
        <div className={classes.comment}>
            <div className={classes.header}>
                <Text kind='subtitle'>{name}</Text>
                <Text kind='subtitle'>.</Text>
                <Text kind='subtitle'>{email}</Text>
            </div>
            <Text kind='text'>{body}</Text>
        </div>
    );
};
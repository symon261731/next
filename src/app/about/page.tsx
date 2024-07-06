import classes from '@/app/app.module.css';
import { BigLike } from '@/components/BigLike/BigLike';

export default function About() {
    const likeId = '1';

    return (
        <div>
            <div className={classes.biglikeExample}>
                <BigLike />
            </div>
        </div>
    );
}

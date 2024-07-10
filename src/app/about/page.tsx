import classes from '@/app/app.module.css';
import { BigLike } from '@/components/BigLike/BigLike';

export default function About() {
    const likeId = '1';

    return (
        <div>
            <div className={classes.biglikeExample}>
                <nav>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </nav>
                <BigLike id={likeId} />
            </div>
        </div>
    );
}

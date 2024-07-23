import classes from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {}
export const Header = () => {
    return (
        <div className={classes.header}>
            <h2 className={classes.title}>.my_blog</h2>
            <Link href={'https://github.com/symon261731'} target={'_blank'}>
                <Image src={'/github.svg'} alt={'git'} width={24} height={24} />
            </Link>
        </div>
    );
};

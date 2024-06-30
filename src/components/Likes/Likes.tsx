import Image from 'next/image';
import styles from './Likes.module.css';

export const Likes = () => {
      return (
            <div className={styles.likes}>
                  <span>4</span>
                  <Image src={'/shape.svg'} alt={'like'} width={16} height={16} />
            </div>
      );
};

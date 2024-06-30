import { IButtonProps } from './Button.props';
import classNames from 'classnames';
import styles from './Button.module.css';
import Image from 'next/image';

export const Button = ({ className, children, hasArrow = false, ...otherProps }: IButtonProps) => {
      return (
            <button {...otherProps} className={classNames(styles.button, className)}>
                  {children}
                  {hasArrow && <Image src='/arrow.svg' alt={'arrow'} width={20} height={20} />}
            </button>
      );
};

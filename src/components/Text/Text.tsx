import { TTextKind, ITextProps } from './Text.props';
import { JSX } from 'react';
import classNames from 'classnames';
import styles from './Text.module.css';

export const Text = ({ kind = 'text', children, className }: ITextProps) => {
      const textMap: Record<TTextKind, JSX.Element> = {
            title: <h1 className={classNames(styles.title, className)}> {children}</h1>,
            subtitle: <h5 className={classNames(styles.subtitle, className)}>{children}</h5>,
            text: <p className={classNames(styles.text, className)}>{children}</p>
      };

      return textMap[kind];
};

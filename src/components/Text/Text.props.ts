import { ReactNode } from 'react';

export type TTextKind = 'title' | 'subtitle' | 'text';

export interface ITextProps {
      kind?: TTextKind;
      children: ReactNode;
      className?: string;
}

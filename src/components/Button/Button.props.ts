import React, { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
      children: React.ReactNode;
      hasArrow?: boolean;
      kind?: 'normal' | 'clear'
}

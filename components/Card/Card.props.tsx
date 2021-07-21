import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    Color?: 'white' | 'blue';
    children: ReactNode;
}
import { FC } from 'react';
import './Background.scss';

export const Background: FC = ({ children }) => {
    return <div className="bacground">{children}</div>;
};

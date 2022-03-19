import './Background.scss';

import { FC } from 'react';

const Background: FC = ({ children }) => {
    return <div className="background">{children}</div>;
};

export default Background;

import './Background.scss';

import { FC } from 'react';

const Background: FC = ({ children }) => {
    return <div className="bacground">{children}</div>;
};

export default Background;

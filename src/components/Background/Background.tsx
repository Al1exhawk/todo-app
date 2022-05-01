import './Background.scss';

import { Box } from '@mui/material';
import { FC } from 'react';

const Background: FC = ({ children }) => {
    return <Box className="background">{children}</Box>;
};

export default Background;

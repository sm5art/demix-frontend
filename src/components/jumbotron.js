import React from 'react';
import { Button } from 'antd';

import theme from '../theme';
import { login } from '../utils/login';

const Jumbotron = () => (
    <div>
        <h1 style={{...theme.fonts.h1, marginTop: theme.spacing.large, marginBottom: theme.spacing.large}}>Separate vocals from music with state of the art AI.</h1>
        <Button onClick={login} style={{marginBottom: theme.spacing.large}} size="large" shape="round">Get started for free</Button>
    </div>
);

export default Jumbotron;
import React from 'react';

import theme from '../theme';
import Container from './container';

const Sample = () => (
    <div style={{background: theme.colors.background.secondary,}}>
        <Container style={{paddingLeft:theme.spacing.medium, paddingRight:theme.spacing.medium, paddingTop: theme.spacing.large, paddingBottom: theme.spacing.large}}>
            <h1 style={{...theme.fonts.large,}}>See a sample</h1>
        </Container>
    </div>
);

export default Sample;
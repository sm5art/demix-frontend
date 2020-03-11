import React from 'react';

import { rhythm } from '../utils/typography';

const PAGE_WIDTH = 30;

const Container = ({children, style}) => (
    <div style={{margin: 'auto', maxWidth: rhythm(PAGE_WIDTH), ...style}}>
        {children}
    </div>
);

export default Container;
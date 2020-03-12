import React from 'react';

import { Row, Col } from 'antd';
import { rhythm } from '../utils/typography';

const BOTTOM_PADDING = 1.0;

const Footer = () => (
    <footer style={{textAlign: 'center', paddingBottom: rhythm(BOTTOM_PADDING)}}>
            <Row><a href="mailto:contactdemix@gmail.com">contact</a></Row>      
            <Row>{(new Date()).getFullYear()} ©</Row>
    </footer>
);

export default Footer;
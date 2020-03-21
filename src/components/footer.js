import React from 'react';

import { Row, } from 'antd';
import theme from '../theme';

const Footer = () => (
    <footer style={{textAlign: 'center', paddingBottom: theme.spacing.medium}}>
            <Row><a href="mailto:contactdemix@gmail.com">contact</a></Row>      
            <Row>{(new Date()).getFullYear()} ©</Row>
    </footer>
);

export default Footer;
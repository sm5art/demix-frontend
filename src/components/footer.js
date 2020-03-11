import React from 'react';

import { Row, Col } from 'antd';
import { rhythm } from '../utils/typography';


const Footer = () => (
    <footer style={{textAlign: 'center'}}>
            <Row><a href="mailto:contactdemix@gmail.com">contact</a></Row>      
            <Row>{(new Date()).getFullYear()} ©</Row>
    </footer>
);

export default Footer;
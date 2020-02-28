import React from 'react';

import { Row, Col } from 'antd';


const Footer = () => (
    <footer>
        <Row>
            <Col span={3}>{(new Date()).getFullYear()} ©</Col>
            <Col offset={24-3-2} span={2}><a href="mailto:contactdemix@gmail.com">contact</a></Col>      
        </Row>
    </footer>
);

export default Footer;
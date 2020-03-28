import React from 'react';

import { Row, Col } from 'antd';
import theme from '../theme';

const Footer = () => (
    <footer style={{textAlign: 'center', paddingBottom: theme.spacing.medium}}>
            <Row>
                <Col span={8}></Col>
                <Col span={3}>
                    <a href="mailto:contactdemix@gmail.com">Contact Us</a>
                </Col>
                <Col span={6}>
                    &copy; Copyright {(new Date()).getFullYear()} unmix
                </Col>
            </Row>      
    </footer>
);

export default Footer;
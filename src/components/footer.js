import React from 'react';

import { Row, Col } from 'antd';
import theme from '../theme';

const Footer = () => (
    <footer style={{textAlign: 'center', paddingBottom: theme.spacing.medium}}>
                    <a style={{marginRight: theme.spacing.small}} href="mailto:contactdemix@gmail.com">Contact Us</a>
                    &copy; Copyright {(new Date()).getFullYear()} unmix
    </footer>
);

export default Footer;
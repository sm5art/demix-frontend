import React from 'react';
import { Button, Row, Col } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

import theme from '../theme';
import { login } from '../utils/login';

const LoginWith = () => (
    <Row style={{marginTop: theme.spacing.large, marginBottom: theme.spacing.large}} type="flex">
        <Col span={12}>
            <h1 style={{...theme.fonts.medium,}}>Built for DJs and producers by a DJ.</h1>

        </Col>
        <Col style={{paddingLeft: theme.spacing.small, paddingRight: theme.spacing.small}} span={12}>
            <Button onClick={login} shape="round">Sign in with <GoogleOutlined /></Button>
            <h1 style={{...theme.fonts.small, marginTop: theme.spacing.small}}>Drag in your audio file and get two stems out. Get started for free.</h1>
        </Col>
    </Row>
);

export default LoginWith;
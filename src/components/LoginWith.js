import React from 'react';
import { Button, Row, Col } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import theme from '../theme';
import { switchModal } from '../redux/auth/actions';

const LoginWith = () => {
    const dispatch = useDispatch();
    return (
        <div style={{marginTop: theme.spacing.large, marginBottom: theme.spacing.large}}>
            <Row>
                <Col span={12}>
                    <h1 style={{...theme.fonts.medium,}}>Built for DJs and producers.</h1>
                </Col>
            </Row>
            <Row>
                <Col span={12} style={{float: 'right'}}>
                    <h1 style={{...theme.fonts.small, marginTop: theme.spacing.small}}>Drag in your audio file and get two stems out. Get started for free.</h1>
                    <Button type="primary" onClick={()=>dispatch(switchModal())} shape="round">Get started</Button>
                </Col>   
            </Row>
        </div>
    );
}

export default LoginWith;
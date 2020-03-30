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
                    <h1 style={{...theme.fonts.medium,}}>Made for karaoke and music production</h1>
                </Col>
                <Col span={12} style={{float: 'right'}}>
                    <h1 style={{...theme.fonts.small, textAlign: "center"}}>Login with google to drag in your audio file and get stems out</h1>
                    <Button style={{display: 'block', margin: '0 auto'}} type="primary" onClick={()=>dispatch(switchModal())} shape="round">Get started</Button>
                </Col>   
            </Row>
        </div>
    );
}

export default LoginWith;
import React from 'react';
import { Button, Modal } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import { switchModal } from '../redux/auth/actions'
import { login } from '../utils/login';
import theme from '../theme';

const LoginModal = () => {
    const dispatch = useDispatch();
    return (
        <Modal
                visible={useSelector(state=>state.auth.modal)}
                footer={null} 
                onCancel={()=>dispatch(switchModal())}
        >
            <div style={{textAlign: 'center'}}>
                <h1 style={{...theme.fonts.large}}>Sign in</h1> 
                <Button size="large" onClick={()=>{login();dispatch(switchModal());}} shape="round"><GoogleOutlined /> Continue with Google </Button>
        
            </div>
        </Modal>
    );
}

export default LoginModal;
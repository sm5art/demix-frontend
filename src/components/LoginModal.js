import React from 'react';
import { Button, Modal } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import { switchModal } from '../redux/auth/actions';
import { login } from '../utils/login';
import theme from '../theme';

const LoginModal = () => {
  const dispatch = useDispatch();
  return (
    <Modal
      visible={useSelector((state) => state.auth.modal)}
      footer={null}
      onCancel={() => dispatch(switchModal())}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ ...theme.fonts.large }}>Sign in</h1>
        <Button size="large" onClick={() => { login(); dispatch(switchModal()); }} shape="round">
          <GoogleOutlined />
          {' '}
          Continue with Google
          {' '}
        </Button>
        <h1 style={{ ...theme.fonts.medium, marginTop: theme.spacing.large }}>Why do I need to sign in?</h1>
        <p style={{ ...theme.fonts.small }}>Signing in allows us to set a limit on individuals uploading to prevent against DDOS attacks.</p>
      </div>
    </Modal>
  );
};

export default LoginModal;

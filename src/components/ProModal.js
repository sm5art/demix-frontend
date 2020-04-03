import React from 'react';
import { Button, Modal, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { switchProModal } from '../redux/auth/actions';
import { getNotified } from '../redux/api/actions';

import theme from '../theme';

const ID = 'notify_email';

const ProModal = () => {
  const dispatch = useDispatch();
  return (
    <Modal
      visible={useSelector((state) => state.auth.proModal)}
      footer={null}
      onCancel={() => dispatch(switchProModal())}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ ...theme.fonts.medium, marginTop: theme.spacing.small }}>Get notified when Pro comes out</h1>
        <Input id={ID} style={{ width: '50%', margin: 'auto' }} placeholder="email" />
        <Button onClick={() => { dispatch(getNotified(document.getElementById(ID).value)); dispatch(switchProModal()); }} style={{ marginLeft: theme.spacing.small }}>
          Get notified
        </Button>
      </div>
    </Modal>
  );
};

export default ProModal;

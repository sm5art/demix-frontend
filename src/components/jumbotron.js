import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';

import theme from '../theme';
import { switchModal } from '../redux/auth/actions';

const Jumbotron = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 style={{ ...theme.fonts.h1, marginTop: theme.spacing.large, marginBottom: theme.spacing.large }}>Separate stems from music with state of the art AI</h1>
      <Button type="primary" onClick={() => dispatch(switchModal())} style={{ marginBottom: theme.spacing.large, alignSelf: 'center' }} size="large" shape="round">Get started for free</Button>
    </div>
  );
};

export default Jumbotron;

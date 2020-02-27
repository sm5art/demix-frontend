import React from 'react';
import {Button, Icon} from 'antd';

import { scale, rhythm } from '../utils/typography';
import { API_BASE } from '../constants';

const Jumbotron = () => (
    <div>
        <h1 style={{...scale(2)}}>Separate music tracks with state of the art AI</h1>
        <h1 style={{...scale(2)}}>perfect tool for DJs, </h1>
        <Button onClick={()=>window.location.replace(`${API_BASE}/login`)}><Icon type="google" /> Login </Button>
    </div>
);

export default Jumbotron;
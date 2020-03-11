import React from 'react';
import {Button, Icon} from 'antd';

import { scale, rhythm } from '../utils/typography';
import AnimatedText from './AnimatedText';
import { API_BASE } from '../constants';
import { grey } from '../utils/colors';

const h1textStyle = {
    ...scale(1.5),
    color: grey[7],
    marginTop: rhythm(1.3),
}

const Jumbotron = () => (
    <div>
        <h1 style={{...h1textStyle, marginBottom: 0,}}>Isolate <AnimatedText loop={true} messages={['vocals', 'drums', 'bass', 'piano']}/> </h1>
        <h1 style={{...h1textStyle, marginTop: 0}}>from any final mix</h1>
        <h2>Empower your DJ sets/samples with state of the art AI</h2>
        <h4>
            Please login with google to upload your mp3/wav
        </h4>
        <Button onClick={()=>window.location.replace(`${API_BASE}/login`)}><Icon type="google" /> Login with Google</Button>
    </div>
);

export default Jumbotron;
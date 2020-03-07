import React from 'react';
import {Button, Icon} from 'antd';

import { scale, rhythm } from '../utils/typography';
import AnimatedText from './AnimatedText';
import { API_BASE } from '../constants';
import { grey } from '../utils/colors';

const h1textStyle = {
    ...scale(1.5),
    color: grey[7],
    marginTop: rhythm(1.3)
}

const Jumbotron = () => (
    <div>
        <h1 style={h1textStyle}>Empower your DJ/sample workflow with state of the art AI</h1>
        <h1 style={h1textStyle}>Isolate <AnimatedText loop={true} messages={['vocals', 'drums', 'bass', 'piano']}/> from any final mix</h1>
        <p>
            login with google to upload your .mp3/.wav
        </p>
        <Button onClick={()=>window.location.replace(`${API_BASE}/login`)}><Icon type="google" /> Login with Google</Button>
    </div>
);

export default Jumbotron;
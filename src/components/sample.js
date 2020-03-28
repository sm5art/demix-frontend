import React from 'react';
import { Row, Col, } from 'antd';
import { DownCircleTwoTone } from '@ant-design/icons';

import theme from '../theme';
import { geekblue } from '../utils/colors';
import Container from './container';
import { Piano, Bass, Drum, Microphone, Disk } from '../images/icons';

const BACKGROUND_COLOR_SHADE = 4;
const PRIMARY_COLOR_SHADE = 7;

const Sample = () => (
    <div style={{background: theme.colors.secondary[BACKGROUND_COLOR_SHADE]}}>
        <Container style={{paddingLeft:theme.spacing.medium, paddingRight:theme.spacing.medium, paddingTop: theme.spacing.large, paddingBottom: theme.spacing.large}}>
            <h1 style={{...theme.fonts.large,}}>Hear a sample</h1>

            <Row type="flex">
                <Col span={24}>
                    <Audio icon={<Disk/>} src={"/input.mp3"}/>
                </Col>
                <Col span={24} style={{display: 'flex', alignItems: 'center',}}>
                    <DownCircleTwoTone style={{...theme.fonts.medium, margin:'auto'}} twoToneColor={geekblue[PRIMARY_COLOR_SHADE]}/>
                </Col>
                <Col span={24}>
                    <Audio icon={<Drum/>} src={"/drums.wav"}/>
                    <Audio icon={<Bass/>} src={"/bass.wav"}/>
                    <Audio icon={<Piano/>} src={"/other.wav"}/>      
                    <Audio icon={<Microphone/>} src={"/vocals.wav"}/>
                </Col>
            </Row>
        </Container>
    </div>
);

const Audio = ({src, style, icon}) => (
    <div style={{marginTop: theme.spacing.tiny, display:'flex', flexDirection:'row'}}>
        {icon}
        <div style={{flexGrow: 1}}>
            <audio
            controls
            style={{marginLeft: theme.spacing.small, width:'100%'}}

            src={src}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </div>
    </div>
)

export default Sample;
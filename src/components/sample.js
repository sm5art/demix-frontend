import React from 'react';
import { Row, Col, } from 'antd';
import { RightCircleTwoTone } from '@ant-design/icons';

import theme from '../theme';
import { geekblue } from '../utils/colors';
import Container from './container';

const Sample = () => (
    <div style={{background: theme.colors.background.secondary,}}>
        <Container style={{paddingLeft:theme.spacing.medium, paddingRight:theme.spacing.medium, paddingTop: theme.spacing.large, paddingBottom: theme.spacing.large}}>
            <h1 style={{...theme.fonts.large,}}>See a sample</h1>

            <Row type="flex">
                <Col style={{display: 'flex', alignItems: 'center'}} xs={24} sm={11}>
                    <Audio src={"/input.mp3"}/>
                </Col>
                <Col xs={24} sm={2} style={{display: 'flex', alignItems: 'center',}}>
                    <RightCircleTwoTone style={{...theme.fonts.medium, margin:'auto'}} twoToneColor={geekblue[7]}/>
                </Col>
                <Col xs={24} sm={11}>
                    <Audio src={"/drums.wav"}/>
                    <Audio src={"/bass.wav"}/>
                    <Audio src={"/other.wav"}/>      
                    <Audio src={"/vocals.wav"}/>
                </Col>
            </Row>
        </Container>
    </div>
);

const Audio = ({src, style}) => (
    <audio
        style={{width: '100%', ...style}}
        controls
        src={src}>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
)

export default Sample;
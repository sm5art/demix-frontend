import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

import { green } from '../utils/colors';
import theme from '../theme';

const Pricing = () => (
    <>
        <Row>
            <Col style={{padding: theme.spacing.medium}} sm={12} xs={24}>
                <PricingCard title="Starter" price="Free" checks={["2 free uploads", "seperation of vocals and instrumental",]}/>
            </Col>
            <Col style={{padding: theme.spacing.medium}} sm={12} xs={24}>
                <PricingCard title="Premium" price="$0.99 per song" checks={["seperation of vocals and instrumental", "seperation of vocals, drums, bass, and others", "keeps processed files forever"]}/>
            </Col>
        </Row>
        <Row style={{textAlign: 'center', marginBottom: theme.spacing.large}}>
        <span style={{...theme.fonts.tiny}}>Refund accepted up to 24 hours after purchase. Cancel any time.</span>
        </Row>
    </>
);

const Check = ({text}) => (
    <div>
        <CheckCircleTwoTone twoToneColor={green[7]}/> <span style={{...theme.fonts.small, marginLeft: theme.spacing.tiny}}>{text}</span>
    </div>
);

const PricingCard = ({title, price, checks}) => (
    <Card bodyStyle={{display: 'flex', flexDirection:'column', height: '100%'}} style={{height:'400px', borderRadius: '7px'}}>
        <div style={{textAlign: 'center', fontWeight: 500}}>
            <div style={{...theme.fonts.small}}>{title}</div>
            <div style={{...theme.fonts.medium, marginTop: theme.spacing.medium}}>{price}</div>
        </div>
        <div style={{marginTop: theme.spacing.medium, }}>
                { checks && checks.map(e=><Check text={e}/>) }
        </div>
        <div style={{flexGrow: 1}}></div>
        <div style={{textAlign: 'center'}}>
            <Button type="primary">Choose {title}</Button>
        </div>
        
    </Card>
);

export default Pricing;
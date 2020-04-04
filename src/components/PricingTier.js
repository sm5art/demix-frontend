import React from 'react';
import {
  Card, Row, Col, Button,
} from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { navigate } from 'gatsby';

import ProModal from './ProModal';
import { switchModal, switchProModal } from '../redux/auth/actions';
import { green } from '../utils/colors';
import theme from '../theme';

const Pricing = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ProModal />
      <Row>
        <Col style={{ padding: theme.spacing.medium }} sm={12} xs={24}>
          <PricingCard onClick={() => dispatch(switchModal())} buttonText="Get started" title="Starter" price="Free" checks={['7 free weekly uploads']} />
        </Col>
        <Col style={{ padding: theme.spacing.medium }} sm={12} xs={24}>
          <PricingCard onClick={() => dispatch(switchProModal())} buttonText="Get notified when Pro releases" billed title="Pro" price="$4.99 a month" checks={['unlimited uploads', 'priority in the queue', 'no ads']} />
        </Col>
      </Row>
    </>
  );
};

const Check = ({ text }) => (
  <div>
    <CheckCircleTwoTone twoToneColor={green[7]} />
    {' '}
    <span style={{ ...theme.fonts.small, marginLeft: theme.spacing.tiny }}>{text}</span>
  </div>
);

const PricingCard = ({
  title, price, checks, billed, buttonText, onClick,
}) => (
  <Card bodyStyle={{ display: 'flex', flexDirection: 'column', height: '100%' }} style={{ height: '400px', borderRadius: '7px' }}>
    <div style={{ textAlign: 'center', fontWeight: 500 }}>
      <div style={{ ...theme.fonts.small }}>{title}</div>
      <div style={{ ...theme.fonts.medium, marginTop: theme.spacing.medium }}>{price}</div>
      {billed && <div style={{ ...theme.fonts.small }}>billed monthly</div> }
    </div>
    <div style={{ marginTop: theme.spacing.medium, textAlign: 'center' }}>
      { checks && checks.map((e) => <Check text={e} />) }
    </div>
    <div style={{ flexGrow: 1 }} />
    <div style={{ textAlign: 'center' }}>
      <Button onClick={onClick} type="primary">
        {buttonText}
      </Button>
    </div>

  </Card>
);

export default Pricing;

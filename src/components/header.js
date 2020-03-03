import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Avatar, Button, Popover } from 'antd';

import { grey } from '../utils/colors';
import { rhythm } from '../utils/typography';

const LINK_MARGIN = 0.5;

const content = (
  <div>
    <Button onClick={()=>{
      window.localStorage.removeItem('access');
      window.location.replace('/');
    }} type="primary">Log out</Button>
  </div>
);

const LoggedInAvatar = () => (
    <Popover placement="bottom" content={content} trigger="click">
        <Avatar size="large" icon="user" />
      </Popover>
);

const Header = ({ siteTitle, isLoggedIn }) => (
  <header >
    <Row>
      <Col span={7}>
        <h1 style={{color: grey[0], marginTop:rhythm(LINK_MARGIN)}} >
            {siteTitle}
        </h1>
      </Col>
      <Col span={3} offset={24-10}>
        {isLoggedIn && <LoggedInAvatar/>}
      </Col>
    </Row>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

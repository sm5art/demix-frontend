import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Avatar } from 'antd';

import { grey } from '../utils/colors';
import { rhythm } from '../utils/typography';

const LINK_MARGIN = 0.9;

const Header = ({ siteTitle, isLoggedIn }) => (
  <header >
    <Row>
      <Col span={3}>
        <h1 style={{color: grey[0], marginTop:rhythm(LINK_MARGIN)}} >
            {siteTitle}
        </h1>
      </Col>
      <Col span={3} offset={24-6}>
        {isLoggedIn && <Avatar size="large" icon="user" />}
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

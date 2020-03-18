import { Link, navigate } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Avatar, Button, Popover } from 'antd';

import { grey } from '../utils/colors';
import { login } from '../utils/login';
import theme from '../theme';

const ProfileContent = (
  <div>
    <Button onClick={()=>{
      window.localStorage.removeItem('access');
      window.location.replace('/');
    }} type="primary">Log out</Button>
  </div>
);

const LoggedInAvatar = () => (
    <Popover placement="bottom" content={ProfileContent} trigger="click">
        <Avatar style={{float: 'right'}} size="large" icon="user" />
      </Popover>
);

class Header extends React.Component {
  state = {
    selected: 0
  }
  constructor(props, context) {
    super(props, context);
  }

  onSelected (state) {
    this.setState({selected: state});
  }

  render() {
    const { siteTitle, isLoggedIn } = this.props;
    const { selected } = this.state;
    return (
      <header >
          <Row>
            <Col span={7}>
            <h1 style={{color: grey[0], marginTop: theme.spacing.small }} >
                {siteTitle}
            </h1>
            </Col>
            <Col flex="auto">
            {isLoggedIn ? <LoggedInAvatar/> : <LoggedOutComponent selected={selected} onSelected={this.onSelected.bind(this)}/>}
            </Col>
          </Row>
            
      </header>
    );
  }
}

const LoggedOutComponent = ({selected, onSelected}) =>
  (
    <div style={{display:'inline', float:'right'}}>
      <Item selected={window.location.pathname === '/'} onClick={()=>{navigate('/');}} text={'features'}/>
      <Item selected={window.location.pathname === '/pricing'} onClick={()=>{navigate('/pricing')}} text={'pricing'}/>
      <Item onClick={()=>{login();}} text={'log in'}/>
    </div>
  );

const Item = ({onClick, text, selected}) => (
  <a style={{...theme.fonts.small, marginLeft: theme.spacing.medium ,textDecoration: selected ? 'overline' : 'none'}} onClick={onClick}>{text}</a>
);



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

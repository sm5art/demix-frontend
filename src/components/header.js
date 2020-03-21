import { Link, navigate } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Avatar, Button, Popover } from 'antd';
import { useDispatch } from 'react-redux';

import { grey } from '../utils/colors';
import { logout } from '../redux/auth/actions';
import { login } from '../utils/login';
import { isClient } from '../utils/client';
import theme from '../theme';


class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { siteTitle, isLoggedIn } = this.props;
    return (
      <header >
          <Row>
            <Col span={7}>
            <h1 onClick={()=>navigate('/')} style={{color: grey[0], marginTop: theme.spacing.small }} >
                {siteTitle}
            </h1>
            </Col>
            <Col flex="auto">
            <Menu isLoggedIn={isLoggedIn}/>
            </Col>
          </Row>
            
      </header>
    );
  }
}

const ProfileContent = () => {
  const dispatch = useDispatch();
  return (
  <div>
    <Button onClick={()=>{
      dispatch(logout());
      navigate('/');
    }} type="primary">Log out</Button>
  </div>)};

const AvatarS = () => 
  (<Popover placement="bottom" content={ProfileContent()} trigger="click">
    <Avatar style={{marginLeft: theme.spacing.medium}} size="large" icon="user" />
  </Popover>);

const Menu = ({isLoggedIn}) =>
  (
    <div style={{display:'inline', float:'right'}}>
      {isLoggedIn && <Item onClick={()=>navigate('/upload')} text='upload'/> }
      {isLoggedIn && <Item onClick={()=>navigate('/files')} text='my files'/> }
      {!isLoggedIn && <Item selected={isClient && window.location.pathname === '/'} onClick={()=>{navigate('/');}} text='features'/> } 
      {!isLoggedIn && <Item selected={isClient && window.location.pathname === '/pricing'} onClick={()=>{navigate('/pricing')}} text='pricing'/> }
      {isLoggedIn ? <AvatarS/> : <Item onClick={()=>{login();}} text='log in'/> }
    </div>
  );

const Item = ({onClick, text, selected, style}) => (
  <a style={{...theme.fonts.small, ...style, marginLeft: theme.spacing.medium ,textDecoration: selected ? 'overline' : 'none'}} onClick={onClick}>{text}</a>
);



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

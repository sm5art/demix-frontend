import { Link, navigate } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Avatar, Button, Popover } from 'antd';
import { useDispatch } from 'react-redux';

import { grey } from '../utils/colors';
import { logout } from '../redux/auth/actions';
import { switchModal } from '../redux/auth/actions';
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
            <h1 onClick={()=>navigate('/')} style={{color: grey[0], ...theme.fonts.medium, display: 'inline' }} >
                {siteTitle}
            </h1>
            { isLoggedIn ? <LoggedInMenu/> : <LoggedOutMenu/> }
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

const containsStr = (str, otherStr) => str.indexOf(otherStr) >= 0;

const LoggedOutMenu = () =>{
  const dispatch = useDispatch();
  return (
    <div style={{display:'inline', paddingLeft: theme.spacing.medium}}>
      <Item selected={isClient && window.location.pathname === '/'} onClick={()=>{navigate('/');}} text='features'/>
      <Item selected={isClient && containsStr(window.location.pathname,'/pricing')} onClick={()=>{navigate('/pricing')}} text='pricing'/>
      <Item onClick={()=>dispatch(switchModal())} text='log in'/>
    </div>
  );
}
  

const LoggedInMenu = () => (
  <div style={{display:'inline', float:'right'}}>
      <Item selected={isClient && containsStr(window.location.pathname,'/upload')} onClick={()=>navigate('/upload')} text='upload'/>
      <AvatarS/> 
  </div>
)

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

import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Button, Popover } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { logout, switchModal } from '../redux/auth/actions';
import Logo from './Logo';

import theme from '../theme';


class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { siteTitle, isLoggedIn } = this.props;
    return (
      <header style={{ display: 'flex', flexDirection: 'row' }}>
        <a style={{ display: 'flex' }} onClick={() => navigate('/')}>
          <Logo />
        </a>
        <div style={{ display: 'flex', flexGrow: 1 }}>
          { isLoggedIn ? <LoggedInMenu /> : <LoggedOutMenu /> }
        </div>
      </header>
    );
  }
}

const ProfileContent = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.api.me.data);
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ ...theme.fonts.small }}>{userData && userData.email}</div>
      <Button
        style={{ marginTop: theme.spacing.medium }}
        onClick={() => {
          dispatch(logout());
          navigate('/');
        }}
        type="primary"
      >
        Log out
      </Button>
    </div>
  );
};

const AvatarS = ({ style }) => {
  const userData = useSelector((state) => state.api.me.data);
  return (
    <a href="#">
      <Popover placement="bottom" content={ProfileContent()} trigger="click">
        <Avatar src={userData && userData.google.picture} style={{ marginLeft: theme.spacing.medium, ...style }} size="large" icon="user" />
      </Popover>
    </a>
  );
};

const LoggedOutMenu = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ paddingLeft: theme.spacing.medium }}>
      <Item onClick={() => { navigate('/'); }} text="features" />
      <Item onClick={() => { navigate('/pricing'); }} text="pricing" />
      <Item onClick={() => dispatch(switchModal())} text="log in" />
    </div>
  );
};

const LoggedInMenu = () => (
  <div style={{ paddingLeft: theme.spacing.medium, flexGrow: 1 }}>
    <Item onClick={() => navigate('/upload')} text="upload" />
    <Item onClick={() => { navigate('/pricing'); }} text="pricing" />
    <div style={{ float: 'right' }}>
      <AvatarS />
    </div>
  </div>
);

const Item = ({ onClick, text, style }) => (
  <a style={{ ...theme.fonts.small, ...style, marginLeft: theme.spacing.medium }} onClick={onClick}>{text}</a>
);


Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;

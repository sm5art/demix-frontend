import { me } from '../api/actions';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CHECK_LOCAL = 'CHECK_LOCAL';
export const SWITCH_MODAL = 'SWITCH_MODAL';
export const SWITCH_PRO_MODAL = 'SWITCH_PRO_MODAL';

const loginStructure = (token) => ({
  type: LOGIN,
  token,
});

export const login = (token) => (dispatch) => {
  dispatch(loginStructure(token));
  dispatch(me());
};

export const logout = () => ({
  type: LOGOUT,
});

export const checkLocal = () => ({
  type: CHECK_LOCAL,
});

export const switchModal = () => ({
  type: SWITCH_MODAL,
});

export const switchProModal = () => ({
  type: SWITCH_PRO_MODAL,
});

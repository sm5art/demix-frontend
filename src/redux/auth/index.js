import {
  LOGIN, LOGOUT, CHECK_LOCAL, SWITCH_MODAL, SWITCH_PRO_MODAL,
} from './actions';
import getToken from '../../utils/auth';

// the initial state of this reducer
const INITIAL_STATE = {
  error: false, token: null, modal: false, proModal: false,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      window.localStorage.setItem('access', action.token);
      return {
        ...state, token: action.token,
      };
    case CHECK_LOCAL:
      return {
        ...state, token: getToken(),
      };
    case LOGOUT:
      window.localStorage.removeItem('access');
      return INITIAL_STATE;
    case SWITCH_MODAL:
      return {
        ...state, modal: !state.modal,
      };
    case SWITCH_PRO_MODAL:
      return {
        ...state, proModal: !state.proModal,
      };
    default:
      return state;
  }
}
export default reducer;

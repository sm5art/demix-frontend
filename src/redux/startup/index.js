import { INIT, ADBLOCK } from './actions';

// the initial state of this reducer
const INITIAL_STATE = { init: false, adblock: null };

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state, init: true,
      };
    case ADBLOCK:
      return {
        ...state, adblock: action.enabled,
      };
    default:
      return state;
  }
}
export default reducer;

import { INIT } from './actions';

// the initial state of this reducer
const INITIAL_STATE = { init: false, }

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state, init: true,
      }
    default:
      return state
  }
}
export default reducer;
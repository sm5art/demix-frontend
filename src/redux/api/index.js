import { FILES, FILES_SUCCESS } from './actions';
import getToken from '../../utils/auth';

// the initial state of this reducer
const INITIAL_STATE = { error: false, loading: {FILES: false}, data: {FILES: null} }

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILES:
      return {
        ...state, loading: {...state.loading, FILES: true},
      }
    case FILES_SUCCESS:
      return {
        ...state, loading: {...state.loading, FILES: true}, data: {...state.data, FILES: action.data}, 
      }
    default:
      return state
  }
}
export default reducer;
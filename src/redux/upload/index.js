import { UPLOAD_STARTED, UPLOAD_ERROR, UPLOAD_SUCCESS } from './actions';

// the initial state of this reducer
const INITIAL_STATE = { error: null, loading: false, data: null }

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPLOAD_STARTED:
      return {
        ...state, loading: true, data: null,
      }
    case UPLOAD_ERROR:
      return {
        ...state, loading: false, error: action.error, 
      }
    case UPLOAD_SUCCESS:
      return {
        ...state, loading: false, data: action.data,
      }
    default:
      return state
  }
}
export default reducer;
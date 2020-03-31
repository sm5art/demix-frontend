import { message } from 'antd';

import {
  FILES, FILES_SUCCESS, FILES_ERROR, ME, ME_SUCCESS, ME_ERROR, COUNT, COUNT_ERROR, COUNT_SUCCESS,
} from './actions';

// the initial state of this reducer
const INITIAL_STATE = { files: { loading: false, error: null, data: null }, me: { loading: false, error: null, data: null }, count: { loading: false, error: null, data: null } };

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILES:
      return {
        ...state, files: { ...state.files, loading: true, error: null },
      };
    case FILES_SUCCESS:
      return {
        ...state, files: { loading: false, error: null, data: action.data.data },
      };
    case FILES_ERROR:
      message.error(action.error);
      return {
        ...state, files: { loading: false, error: action.error, data: null },
      };
    case ME:
      return {
        ...state, me: { loading: true, error: null, data: null },
      };
    case ME_SUCCESS:
      return {
        ...state, me: { loading: false, error: null, data: action.data.data },
      };
    case ME_ERROR:
      message.error(action.error);
      return {
        ...state, me: { loading: false, error: action.error, data: null },
      };
    case COUNT:
      return {
        ...state, count: { ...state.count, loading: true, error: null },
      };
    case COUNT_SUCCESS:
      return {
        ...state, count: { loading: false, error: null, data: action.data.data },
      };
    case COUNT_ERROR:
      message.error(action.error);
      return {
        ...state, count: { loading: false, error: action.error, data: null },
      };
    default:
      return state;
  }
}
export default reducer;

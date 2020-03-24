import { message } from 'antd';

import { FILES, FILES_SUCCESS, FILES_ERROR } from './actions';

// the initial state of this reducer
const INITIAL_STATE = { files: { loading: false, error: null, data: null, uploadedFileCount: null }, }

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILES:
      return {
        ...state, files: { loading: true, error: null, data: null, uploadedFileCount: null},
      }
    case FILES_SUCCESS:
      return {
        ...state, files: { loading: false, error: null, data: action.data.data, uploadedFileCount: action.data.data.length}, 
      }
    case FILES_ERROR:
      message.error(action.error);
      return {
        ...state, files: { loading: false, error: action.error, data: null, uploadedFileCount: null}
      }
    default:
      return state
  }
}
export default reducer;
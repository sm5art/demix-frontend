import { files } from '../api/actions';

export const UPLOAD_STARTED = "UPLOAD_STARTED";
export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
export const UPLOAD_ERROR = "UPLOAD_ERROR";
export const SWITCH_STEM = "SWITCH_STEM";


export const uploadStarted = (data) => ({
    type: UPLOAD_STARTED,
    data
})

export const uploadSuccess = (data) => (dispatch) => {
    dispatch(uploadSuc(data));
    dispatch(files());
}

export const uploadSuc = (data) => ({
    type: UPLOAD_SUCCESS,
    data
})

export const uploadError = (error) => ({
    type: UPLOAD_ERROR,
    error
})

export const switchStem = (value) => ({
    type: SWITCH_STEM,
    value
})
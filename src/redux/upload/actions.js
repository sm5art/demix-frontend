import { getFilesForUser } from '../../api';

export const UPLOAD_STARTED = "UPLOAD_STARTED";
export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
export const UPLOAD_ERROR = "UPLOAD_ERROR";


export const uploadStarted = () => ({
    type: UPLOAD_STARTED
})

export const uploadSuccess = (data) => ({
    type: UPLOAD_SUCCESS,
    data
})

export const uploadError = (error) => ({
    type: UPLOAD_ERROR,
    error
})
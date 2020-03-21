import { getFilesForUser } from '../../api';

export const FILES = "FILES";
export const FILES_SUCCESS = "FILES_SUCCESS";


export const files = () => (dispatch, getState) => {
    const {auth: { token }} = getState();
    dispatch(filesStarted());
    getFilesForUser(token).then(data=>dispatch(filesSuccess(data)))
}

export const filesStarted = () => ({
    type: FILES
})

export const filesSuccess = (data) => ({
    type: FILES_SUCCESS,
    data
})


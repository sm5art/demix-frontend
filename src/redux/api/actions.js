import { getFilesForUser } from '../../api';

export const FILES = "FILES";
export const FILES_SUCCESS = "FILES_SUCCESS";
export const FILES_ERROR = "FILES_ERROR";


export const files = () => (dispatch, getState) => {
    const {auth: { token }} = getState();
    dispatch(filesStarted());
    getFilesForUser(token).then(data=>{
        if(data.error) {
            dispatch(filesError(data.error));
        }
        else {
            dispatch(filesSuccess(data));
        }
    })
}

export const filesStarted = () => ({
    type: FILES
})

export const filesSuccess = (data) => ({
    type: FILES_SUCCESS,
    data
})

export const filesError = (error) => ({
    type: FILES_ERROR,
    error
})


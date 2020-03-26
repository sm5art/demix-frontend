import { getFilesForUser, meCall } from '../../api';

export const FILES = "FILES";
export const FILES_SUCCESS = "FILES_SUCCESS";
export const FILES_ERROR = "FILES_ERROR";

export const ME = "ME";
export const ME_SUCCESS = "ME_SUCCESS";
export const ME_ERROR = "ME_ERROR";


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

export const me = () => (dispatch, getState) => {
    const {auth: { token }} = getState();
    dispatch(meStarted());
    meCall(token).then(data=>{
        if(data.error) {
            dispatch(meError(data.error));
        }
        else {
            dispatch(meSuccess(data));
        }
    })
}

export const meStarted = () => ({
    type: ME
})

export const meSuccess = (data) => ({
    type: ME_SUCCESS,
    data
})

export const meError = (error) => ({
    type: ME_ERROR,
    error
})



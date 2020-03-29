import { getFilesForUser, meCall, fileCountCall } from '../../api';

export const FILES = "FILES";
export const FILES_SUCCESS = "FILES_SUCCESS";
export const FILES_ERROR = "FILES_ERROR";

export const ME = "ME";
export const ME_SUCCESS = "ME_SUCCESS";
export const ME_ERROR = "ME_ERROR";

export const COUNT = "COUNT";
export const COUNT_SUCCESS = "COUNT_SUCCESS";
export const COUNT_ERROR = "COUNT_ERROR";

export const files = () => (dispatch, getState) => {
    const {auth: { token }} = getState();
    dispatch(filesStarted());
    getFilesForUser(token).then(data=>{
        if(data.error) {
            dispatch(filesError(data.error));
        }
        else {
            dispatch(filesSuccess(data));
            dispatch(countFiles());
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

export const countFiles = () => (dispatch, getState) => {
    const {auth: { token }} = getState();
    dispatch(countStarted());
    fileCountCall(token).then(data=>{
        if(data.error) {
            dispatch(countError(data.error));
        }
        else {
            dispatch(countSuccess(data));
        }
    })
}

export const countStarted = () => ({
    type: COUNT
})

export const countSuccess = (data) => ({
    type: COUNT_SUCCESS,
    data
})

export const countError = (error) => ({
    type: COUNT_ERROR,
    error
})




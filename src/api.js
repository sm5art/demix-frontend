import { API_BASE } from './constants';

export const getFilesForUser = (token) => {
    return new Promise((res, rej) => {
        if(!token) rej();
        fetch(API_BASE+'/files', {
            method: 'GET',
            headers: {token}
        }).then(response=>response.json()).then(res).catch(rej)
    });   
}

export const meCall = (token) => {
    return new Promise((res, rej) => {
        if(!token) rej();
        fetch(API_BASE+'/me', {
            method: 'GET',
            headers: {token}
        }).then(response=>response.json()).then(res).catch(rej)
    });   
}

export const fileCountCall = (token) => {
    return new Promise((res, rej) => {
        if(!token) rej();
        fetch(API_BASE+'/file_count', {
            method: 'GET',
            headers: {token}
        }).then(response=>response.json()).then(res).catch(rej)
    });   
}

import { createActions } from 'reduxsauce'

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CHECK_LOCAL = "CHECK_LOCAL";

export const login = (token) => ({
    type: LOGIN,
    token
})

export const logout = () => ({
    type: LOGOUT
})

export const checkLocal = () => ({
    type: CHECK_LOCAL
})
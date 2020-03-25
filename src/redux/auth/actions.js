export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CHECK_LOCAL = "CHECK_LOCAL";
export const SWITCH_MODAL = "SWITCH_MODAL";

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

export const switchModal = () => ({
    type: SWITCH_MODAL
})
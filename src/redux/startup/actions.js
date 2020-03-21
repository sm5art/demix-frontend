import { createActions } from 'reduxsauce'
import { checkLocal } from '../auth/actions';

export const INIT = "INIT"

export const init = () => ({
    type: INIT,
})

export const startup = () => (dispatch) => {
    dispatch(checkLocal());
    dispatch(init());
}
import { checkLocal } from '../auth/actions';
import { me, countFiles} from '../api/actions';

export const INIT = "INIT"

export const init = () => ({
    type: INIT,
})

export const startup = () => (dispatch) => {
    dispatch(checkLocal());
    dispatch(init());
    dispatch(me());
    dispatch(countFiles());
}
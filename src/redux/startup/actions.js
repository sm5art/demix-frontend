import { checkLocal } from '../auth/actions';
import { me } from '../api/actions';
import notUsingAdBlock from '../../utils/adblock';

export const INIT = 'INIT';
export const ADBLOCK = 'ADBLOCK';


export const init = () => ({
  type: INIT,
});

export const adblock = (enabled) => ({
  type: ADBLOCK,
  enabled,
});

export const checkAdBlock = () => (dispatch) => {
  notUsingAdBlock().then(() => dispatch(adblock(false))).catch(() => dispatch(adblock(true)));
};


export const startup = () => (dispatch) => {
  dispatch(checkLocal());
  dispatch(init());
  dispatch(me());
};

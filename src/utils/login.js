import { navigate } from 'gatsby';

import { API_BASE } from '../constants';
import getToken from '../utils/auth';

export const login = () => {
    if(getToken()) {
        navigate('/upload');
    }
    else {
        window.location.replace(`${API_BASE}/login`);
    }
}
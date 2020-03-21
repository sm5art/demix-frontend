import { isClient } from '../utils/client';

const getToken = () => window.localStorage.getItem('access');

export default () => isClient ? getToken() : null;

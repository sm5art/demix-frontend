const ENV = "nodocker";
const API_CONFIG = {dev: 'https://localhost/api', prod: 'http://unmix.us/api', nodocker:'http://localhost:5000/api'}
export const API_BASE = API_CONFIG[ENV];

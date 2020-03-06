const ENV = "prod";
const API_CONFIG = {dev: 'https://localhost/api', prod: 'https://unmix.us/api', nodocker:'http://localhost:5000/api'}
export const API_BASE = API_CONFIG[ENV];

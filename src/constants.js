const ENV = "prod";
const API_CONFIG = {dev: 'https://localhost/api', prod: 'http://unmix.us/api'}
export const API_BASE = API_CONFIG[ENV];

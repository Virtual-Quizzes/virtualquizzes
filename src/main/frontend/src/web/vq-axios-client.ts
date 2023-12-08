import { AxiosClientFactory } from './factory/axios-client.factory';

export const API_BASE_URL = "https://virtualquizzes-production-b199.up.railway.app";
// export const API_BASE_URL = "/";
export const API_VERSION = 'api/v1';
//${API_BASE_URL}
const vqAxiosClient = AxiosClientFactory.createAxiosClient({
  baseUrl: `${API_BASE_URL}/${API_VERSION}`,
  useAuthRequest: true,
});

export default vqAxiosClient;

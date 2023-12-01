import { AxiosClientFactory } from './factory/axios-client.factory';

export const API_BASE_URL = "http://localhost:8080/";
// export const API_BASE_URL = "/";
export const API_VERSION = '/api/v1';

const vqAxiosClient = AxiosClientFactory.createAxiosClient({
  baseUrl: `${API_BASE_URL}/${API_VERSION}`,
  useAuthRequest: true,
});

export default vqAxiosClient;

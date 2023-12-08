import { AxiosClientFactory } from './factory/axios-client.factory';

export const API_BASE_URL = "https://virtualquizzes-production-b199.up.railway.app";
// export const API_BASE_URL = "/";
// export const API_VERSION = 'v1';

const medicomasAuthAxiosClient = AxiosClientFactory.createAxiosClient({
  baseUrl: `${API_BASE_URL}`,
  useAuthRequest: false,
});

export default medicomasAuthAxiosClient;

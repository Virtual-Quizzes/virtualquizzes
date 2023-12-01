import { User } from '@/models/user.model';
import vqAuthAxiosClient from '../auth-axios-client';
import UserService from './user.service';


type Credentials = {
  username: string;
  password: string;
};

type AuthResponse = {
  token: string;
};

const RESOURCE_LOGIN = '/auth/login';
const RESOURCE_REGISTER = '/auth/register';

const AuthService = {
  login: async (credentials: Credentials): Promise<AuthResponse> => {
    const response = await vqAuthAxiosClient.post(`${RESOURCE_LOGIN}`, credentials);
    if (response.data.token) UserService.setToken(response.data.token);
    return response.data.token;
  },
  signup: async (user: User) => {
    const response = await vqAuthAxiosClient.post(`${RESOURCE_REGISTER}`, user);
    if (response.data.token) UserService.setToken(response.data.token);
    return response.data.token;
  },
  logout: async (): Promise<boolean> => {
    let successSignOut = false;
    try {
      UserService.removeToken();
      successSignOut = true;
    } catch (e) {
      console.error(e);
    }
    return new Promise((resolve) => {
      resolve(successSignOut);
    });
  },
};

export { AuthService };

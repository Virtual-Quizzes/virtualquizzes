import vqAxiosClient from '../vq-axios-client';
import GenericService from './common/generic-crud.service';

const RESOURCE_PROFILE = 'users/profile';


// async get(): Promise<T[]> {
//   const response = await medicomasAxiosClient.get(`${this.endpoint}`);
//   return response?.data || [];
// }

const ProfileService = {
  get: async (): Promise<any>  => {
    const response = await vqAxiosClient.get(`${RESOURCE_PROFILE}`);
    return response?.data || {};
  }

}

export default ProfileService;

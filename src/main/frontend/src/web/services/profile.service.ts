import GenericService from './common/generic-crud.service';

const RESOURCE_PROFILE = 'users/profile';

const ProfileService = new GenericService(RESOURCE_PROFILE, 'profile', 'id', {
  bodyPostWithOutItemKey: true,
});

export default ProfileService;

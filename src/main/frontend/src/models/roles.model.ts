export type Role = 'ADMIN' | 'PROFESSOR' | 'STUDENT';
export type Permission = 'dashboard' | 'quizzes' | 'tests' | 'mygroup' | 'users' | 'settings' | 'profile';

export type RolePermission = {
  role: Role;
  permission: Permission[];
};

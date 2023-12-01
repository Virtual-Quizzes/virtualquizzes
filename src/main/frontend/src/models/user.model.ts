import { Role } from '@/models/roles.model';

export interface User {
  id?: number; 
  username: string;
  firstName: string;
  lastName: string; 
  dob: string;  
  password: string;  
  role: Role;
  extrainfo: string;
}

import { Role } from '@/models/roles.model';
import ProfileService from '@/web/services/profile.service';
import React, { useEffect, useState } from 'react';
import { StudentOnboarding } from './StudentOnboarding';
import { ProfessorOnboarding } from './ProfessorOnboarding.tsx';
import SRoleService from '@/web/services/simulator-rol.service';
import { pruebasMockeadas } from '../Tests/MockData';
import { LService } from '@/web/services/localstorage.service';

export const Onboarding = () => {

  const [ profile, setProfile ] = useState<any>();

  const fecth = async () => {
    const profile = await ProfileService.get();
    setProfile(profile);
    SRoleService.setRole(profile?.role);
  }

  useEffect( () => {
    fecth().then()
    if(profile?.role === "PROFESSOR") LService.saveItemsToLocalStorage(pruebasMockeadas)
  }, []);

  


  if(profile?.role === "STUDENT") return <StudentOnboarding profile={profile} />;
  if(profile?.role === "PROFESSOR") return <ProfessorOnboarding profile={profile} />;

   return(<StudentOnboarding profile={profile} />)

  return (
    <></>
  );

  
};

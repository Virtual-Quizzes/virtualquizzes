import { Role } from '@/models/roles.model';
import ProfileService from '@/web/services/profile.service';
import React, { useEffect, useState } from 'react';
import { StudentOnboarding } from './StudentOnboarding';
import { ProfessorOnboarding } from './ProfessorOnboarding.tsx';

export const Onboarding = () => {

  const [ profile, setProfile ] = useState<any>();

  const fecth = async () => {
    const profile = await ProfileService.get();
    setProfile(profile);
  }

  useEffect( () => {
    fecth().then()
  }, []);

  if(profile?.role === "STUDENT") return <StudentOnboarding profile={profile} />;
  if(profile?.role === "PROFESSOR") return <ProfessorOnboarding profile={profile} />;

  // return(<StudentOnboarding profile={profile} />)

  return (
    <></>
  );

  
};

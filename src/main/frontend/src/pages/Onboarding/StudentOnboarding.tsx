import GroupService from '@/web/services/group.service';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormControl, InputLabel, Link, SelectChangeEvent, Typography, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '@/web/services/auth.service';
import Autocomplete from '@mui/material/Autocomplete';


interface User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: { authority: string }[];
  credentialsNonExpired?: boolean;
  dob?: string;
  enabled?: boolean;
  firstname?: string;
  id: number;
  lastname?: string;
  password?: string;
  role?: string;
  username?: string;
}

type Props = {
  profile: User
}

export const StudentOnboarding = ({
  profile
}: Props) => {

  const [groups, setGroups] = useState<any>([]);

  async function getGroups() {
    const groups = await GroupService.get();
    setGroups(groups);
  }
  
  async function addStudent(groupId: number) {
    let succesull = true; 
    try {
      const res = await GroupService.addStudentsToGroupId( groupId, [profile.id]);      
    } catch (error) {
      succesull = false;
    }
    return succesull;
}  

useEffect(() => {
  getGroups().then();
}, []);

const redirectToDashboard = () => {};
  // Select Group 
  // Add Student 
  // then redirectToDashboard
  const [selectedOption, setSelectedOption] = React.useState<string>('');


  const navigate = useNavigate();
 
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value as string);
  };
  


  const selection = async () => {
    try {
      if(selectedOption) {
        addStudent(parseInt(selectedOption));
        navigate('/dashboard');}
    } catch(e) {

    }
  };

   
  return (
    <Container component="main" maxWidth="xs">
    <Box
      sx={{
        // marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
      }}
    >
      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
        <Typography paddingY={3.2} component="h1" variant="h1" fontWeight={700}>
          Eliga a un grupo
        </Typography>
      </Box>
      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
        <Typography paddingY={3.2} variant="body1">
          Seleccione el grupo de su preferencia
        </Typography>
      </Box>
      
      <FormControl fullWidth margin="normal" >
        {/* <InputLabel id="demo-simple-select-label">Grupo</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedOption}
          label="Grupo"
          // @ts-ignore
          onChange={handleChange}
        >
            {groups.map((option:any) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
            ))}
        </Select>
      </FormControl>



        <Button onClick={selection} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Seleccionar Grupo
        </Button>
      
    </Box>
  </Container>
  );
};

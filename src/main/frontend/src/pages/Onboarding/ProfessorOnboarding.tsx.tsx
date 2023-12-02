import GroupService from '@/web/services/group.service';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '@/web/services/auth.service';
import { MenuItem, Select } from '@mui/base';


interface User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: { authority: string }[];
  credentialsNonExpired?: boolean;
  dob?: string;
  enabled?: boolean;
  firstname?: string;
  id?: number;
  lastname?: string;
  password?: string;
  role?: string;
  username?: string;
}

type Props = {
  profile: User
}
export const ProfessorOnboarding = ({
  profile
}: Props) => {

  async function createGroup(data: any) {
      const formattedData = {
        professor_id: profile.id, //userProfile
        name: data.name,
        student_ids: []
      }
      await GroupService.create(formattedData);
  }  


  const navigate = useNavigate();

  const schema = yup.object().shape({
     name: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm({
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const onSubmit = async (data) => {
    try {
      await createGroup(data);
      navigate('/dashboard');
    } catch (error) {
      
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
          Crear Grupo
        </Typography>
      </Box>
      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
        <Typography paddingY={3.2} variant="body1">
         Manos a la obra! Configure su grupo.
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>

          <TextField
            margin="normal"
            required
            fullWidth
            label="Nombre del Grupo"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
          />         
              
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Crear Grupo
        </Button>
      </form>
    </Box>
  </Container>
  );

};

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputLabel, Link, MenuItem, Select, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FormControl } from '@mui/base';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AuthService } from '@/web/services/auth.service';
import { User } from '@/models/user.model';

const roles = [
  { value: 'PROFESSOR', label: 'Profesor' },
  { value: 'STUDENT', label: 'Estudiante' },
  // ... otras opciones ...
];

export const SignUp = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(6).required(),
    firstName: yup.string().required(),
    lastName:  yup.string().required(),
    dob: yup.date().required(),
    role: yup.string().required(),
    extrainfo: yup.string()
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

    const formatted: User = {
      ...data,
      dob: new Date(data?.dob).toLocaleString("pe-PE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        formatMatcher: "basic"
      }),
      extrainfo: data.extrainfo ?? "",
    }
    console.log(formatted);
    const res = await AuthService.signup(data);
    console.log(res);
    navigate('/onboarding');
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
            Iniciar Sesión
          </Typography>
        </Box>
        <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
          <Typography paddingY={3.2} variant="body1">
            ¡Hola! Te ves list@ para practicar.
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            {...register('username')}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
           <TextField
            margin="normal"
            required
            fullWidth
            label="Nombres"
            type="text"
            {...register('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Apellidos"
            type="text"
            {...register('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
 
 <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="dob"
        
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  label="Fecha de Nacimiento *"
                  sx={{ width: "100%", mt: 1 }}
                  // renderInput={(params) => <TextField {...params} fullWidth margin="normal" error={!!errors.dob} helperText={errors.dob?.message} />}
                />
              )}
            />
          </LocalizationProvider>
                      
                      <Typography mt={2}>Eliga su rol </Typography>

            <Select
              labelId="role-label"
              sx={{
                width: "100%"
              }}
              label="Rol"
              placeholder='Rol'
              {...register('role')}
              error={!!errors.role}
            >
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <Typography color="error">{errors.role?.message}</Typography>
            {watch('role') === 'PROFESSOR' && (
          <TextField
            margin="normal"
            fullWidth
            label="Carrera/Profesión"
            {...register('extrainfo')}
            error={!!errors.extrainfo}
            helperText={errors.extrainfo?.message}
          />
        )}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Ingresar
          </Button>
          <Box>
          <Typography sx={{ display: "flex", alignItems: "center"}}>
      ¿Ya tienes una cuenta?{' '}
      <Link  
      component="button"
        variant="body2"
        sx={{ ml: 2}}
        onClick={() => {
          navigate('/');
        }}>
        Iniciar Sesión
      </Link>
    </Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const onSubmit = (data) => {
    console.log(data);
    navigate('/dashboard');
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
            ¡Me alegro de que hayas vuelto! Utilice esta página para volver a iniciar sesión y continuar con su trabajo.
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
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
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Ingresar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

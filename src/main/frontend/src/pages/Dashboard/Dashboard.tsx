import React, { useEffect, useState } from 'react';
import { Typography, Stack } from '@mui/material';
// import { MainContainer } from '@/Layouts/MainContainer';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import BooksUri from '@/assets/booksv2.svg';
import CompletedUri from '@/assets/completed.svg';
import { IconWrapper } from '@/components/Icons/icon-wrapper';
import { SxProps } from '@mui/material';
import { AvatarGroup } from '@mui/material';
import { Avatar } from '@mui/material';
import SRoleService from '@/web/services/simulator-rol.service';
import ProfileService from '@/web/services/profile.service';
import GroupService from '@/web/services/group.service';
// import Example from '@/components/stats/StraightAnglePieChart';
interface Props {
  title?: string;
  children: React.ReactNode;
  iconId?: string;
}

type StatProps = {
  label?: string;
  value?: string | number;
  sx?: SxProps;
  TopChildren?: React.ReactNode;
};

const Stat = ({ label, value, sx, TopChildren }: StatProps) => {
  return (
    <Box sx={{ ...sx, padding: 3, height: '100%' }}>
      {TopChildren && <>{TopChildren}</>}
      <Typography variant="h3" fontWeight={700} mb={1}>
        {value}
      </Typography>
      <Typography variant="body1" fontWeight={400}>
        {label}
      </Typography>
    </Box>
  );
};

const InfoCard = ({ title, children, iconId }: Props) => {
  return (
    <Box
      sx={{
        height: '100%',
        bgcolor: 'white',
        borderRadius: '10px',
        boxShadow: 'rgb(220,220,220,.5) 5px 5px 10px',
        padding: '12px 24px',
      }}
    >
      {title && (
        <Stack direction={'row'} display={'display'} alignItems={'center'} mb={2}>
          {iconId && (
            <Box
              sx={{
                borderRadius: '5px',
                width: 30,
                height: 30,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#f7f7f7',
              }}
            >
              <IconWrapper id={iconId} color={'#000'} width={24} />
            </Box>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', height: 30 }}>
            <Typography variant="h3" fontWeight={600} ml={iconId ? 2 : 0} my={'auto'}>
              {title}
            </Typography>
          </Box>
        </Stack>
      )}
      <Stack spacing={2} sx={{ width: '100%' }}>
        {children}
      </Stack>
    </Box>
  );
};

const Dashboard = () => {

  const role = SRoleService.getRole();

  async function getGroups() {
    const groups = await GroupService.get();
    setGroups( groups );
  }

  const [ profile, setProfile ] = useState<any>();
  const [ groups, setGroups ] = useState<any>();
  const [ cr, setCr ] = useState<any>(role);
"student_ids"

  const isPro = cr === "PROFESSOR";

  const fecth = async () => {
    try {
      const profile = await ProfileService.get();
      setProfile(profile);
      setCr(profile?.role)
    } catch (error) {
      setProfile({
        firstname: isPro ? "Maestro" : "Estudiante",
        id: profile?.id
      });
    }
 
  }

  const currentId = [profile?.id];  // Reemplaza [your_id_here] con tu ID
  const resultObject = groups?.find((obj: any) => obj?.student_ids?.includes(currentId));

  useEffect( () => {
    fecth().then()
    getGroups().then()
  }, []);


  return (
    <>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={8}>
          <InfoCard>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={5}
                xl={6}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                justifyContent={'center'}
              >
                {isPro ?
                (
                  <>
                    <Typography variant="h2" fontWeight={800} component="div" gutterBottom>
                      Hola, {profile?.firstname}!
                    </Typography>
                    <Typography variant="body1" component="div" gutterBottom>
                      Empiece el día creando nuevas evaluaciones. Manos a la obra!
                    </Typography>
                  </>
                ): (
                  <>
                  <Typography variant="h2" fontWeight={800} component="div" gutterBottom>
                    Hola, {profile?.firstname}!
                  </Typography>
                  <Typography variant="body1" component="div" gutterBottom>
                    Tiene {1} evaluacion nueva pendiente. Así que Manos a la obra!
                  </Typography>
                </>
                )}
                <Button variant="contained" sx={{ mt: 2 }}>
                  Comenzar
                </Button>
              </Grid>
              <Grid item xs={12} md={7} xl={6} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Box>
                  <img src={BooksUri} alt="logo" width={'250px'} />
                </Box>
              </Grid>
            </Grid>
          </InfoCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoCard title="Mi Grupo" iconId="group_ON">
            <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Grid item xs={12}>
                <Stack
                  direction={'row'}
                  display={'flex'}
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  spacing={2}
                  paddingY={1}
                >
                  <Box>
                    <Typography variant="h5" fontWeight={700} component="div" gutterBottom>
                      Grupo
                    </Typography>
                    <Typography variant="body1" component="div" gutterBottom>
                      {resultObject?.name}
                    </Typography>
                  </Box>
                  <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" />
                  </AvatarGroup>
                </Stack>
              </Grid>
              <Grid item xs={12} mt={1}>
                <Stack
                  direction={'row'}
                  display={'flex'}
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                  spacing={2}
                  paddingY={1}
                >
                  <Box>
                    <Typography variant="h5" fontWeight={700} component="div" gutterBottom>
                      Profesor
                    </Typography>
                    <Typography variant="body1" component="div" gutterBottom>
                     {isPro ?  profile?.firstName : "Alberto Neyra" }
                    </Typography>
                  </Box>
                  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/1.jpg" />
                </Stack>
              </Grid>
            </Grid>
          </InfoCard>
        </Grid>
        <Grid container item xs={12} spacing={2} mt={2} mb={5}>
          <Grid item xs={12}>
            <Typography variant="h2" fontWeight={800} component="div" gutterBottom>
              Estadísticas/ Rendimiento
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoCard title="Textos" iconId="book">
              <Grid container>
                <Grid item xs={12} md={6} paddingRight={{ md: 2 }} paddingBottom={{ xs: 2, md: 0 }}>
                  <Stat
                    TopChildren={
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <img src={CompletedUri} alt="completed" width={100} />
                      </Box>
                    }
                    sx={{
                      background: '#f3f2ff',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                      flexDirection: 'column',
                    }}
                    label={'Textos completados'}
                    value={20}
                  />
                </Grid>
                <Grid item container xs={12} md={6} gap={2}>
                  <Grid item xs={12}>
                    <Stat
                      sx={{ background: '#f3f2ff', borderRadius: '20px' }}
                      label={'Totalmente acertados'}
                      value={'50%'}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Stat
                      sx={{ background: '#f3f2ff', borderRadius: '20px' }}
                      label={'Totalmente desacertados'}
                      value={'10%'}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </InfoCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoCard title="Preguntas" iconId="form">
              <Grid container gap={2}>
                <Grid item xs={12}>
                  <Stat
                    sx={{ background: '#f3f2ff', borderRadius: '20px' }}
                    label={'Aciertos en total'}
                    value={'70%'}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stat
                    sx={{ background: '#f3f2ff', borderRadius: '20px' }}
                    label={'Promedio de Aciertos/texto'}
                    value={'60%'}
                  />
                </Grid>
              </Grid>
            </InfoCard>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

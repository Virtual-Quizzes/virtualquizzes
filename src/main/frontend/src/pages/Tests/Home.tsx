import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const TestHome = () => {
  const navigate = useNavigate();

  const goToCreateTestPage = () => navigate('/tests/new');

  // const goToEditTestPage = (id: number | string) => navigate(`/tests/edit/${id}`);

  return (
    <Grid container spacing={2} justifyContent={'flex-end'} paddingY={'32px'}>
      <Grid item>
        <Button onClick={goToCreateTestPage} variant={'contained'} color={'primary'}>
          Añadir Evaluación
        </Button>
      </Grid>
    </Grid>
  );
};

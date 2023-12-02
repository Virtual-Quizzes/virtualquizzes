import React, { useState } from 'react';
import EvaluationTable from './EvaluationTable';
import { pruebasMockeadas } from './MockData';
import { Button, TextField, Box, Drawer } from '@mui/material';
import EvaluationForm from './EvaluationForm';


export function TestHome() {
    const [evaluaciones, setEvaluaciones] = useState(pruebasMockeadas);
    const [busqueda, setBusqueda] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: any) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleSaveEvaluation = (evaluation: any) => {
        setEvaluaciones([...evaluaciones, { ...evaluation, id: Date.now() }]);
        setDrawerOpen(false);
    };

    const handleEdit = (id: any) => {
        console.log("Editar evaluacion", id);
        // Implementar lógica de edición
    };

    const handleDelete = (id: any) => {
        setEvaluaciones(evaluaciones.filter(evaluacion => evaluacion.id !== id));
    };

    const handleBusqueda = (event: any) => {
        setBusqueda(event.target.value.toLowerCase());
    };

    const evaluacionesFiltradas = busqueda
        ? evaluaciones.filter(evaluacion => evaluacion.name.toLowerCase().includes(busqueda))
        : evaluaciones;

    return (
      <>
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 0", alignItems: "center"}}>
            <Box width={"50%"}>
            <TextField 
                    fullWidth 
                    label="Buscar Evaluación" 
                    variant="outlined" 
                    onChange={handleBusqueda}
                />
            </Box>
            <Button variant="contained" color="primary" onClick={toggleDrawer(true)}>
                    Añadir Nueva Evaluación
                </Button>
          </Box>
            <EvaluationTable evaluaciones={evaluacionesFiltradas} onEdit={handleEdit} onDelete={handleDelete} />
        </Box>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box p={2} width={400}>
              <EvaluationForm quizzes={pruebasMockeadas} onSave={handleSaveEvaluation} />
          </Box>
        </Drawer>
      </>
    );
};





// export const TestHome = () => {
//   const navigate = useNavigate();

//   const goToCreateTestPage = () => navigate('/tests/new');

//   // const goToEditTestPage = (id: number | string) => navigate(`/tests/edit/${id}`);

//   return (
//     <Grid container spacing={2} justifyContent={'flex-end'} paddingY={'32px'}>
//       <Grid item>
//         <Button onClick={goToCreateTestPage} variant={'contained'} color={'primary'}>
//           Añadir Evaluación
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

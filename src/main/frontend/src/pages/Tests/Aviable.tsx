import { Box, Button, Typography } from '@mui/material';
import { List, ListItem, ListItemText, TextField, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pruebasMockeadas } from "./MockData";
import EvaluationService from '@/web/services/evaluations.service';

export const AviablePage = () => {
    const navigate = useNavigate();
    const evaluacionesIniciales = pruebasMockeadas;

    const [evaluations, setEvaluations] = useState<any>(evaluacionesIniciales);
    
    const [busqueda, setBusqueda] = useState('');
    const [evaluacionesFiltradas, setEvaluacionesFiltradas] = useState(evaluacionesIniciales);

    // const fecth = async () => {
    //     try {
    //       const evas = await EvaluationService.get();
    //       setEvaluations(evas);
    //     } catch (error) {
      
    //     }
     
    //   }
    //   useEffect(() => {
    //     fecth().then();
    // }, []);

    useEffect(() => {
        const resultadosFiltrados = evaluations.filter((evaluacion: any) =>
            evaluacion.main_text.toLowerCase().includes(busqueda.toLowerCase())
        );
        setEvaluacionesFiltradas(resultadosFiltrados);
    }, [busqueda]);

    const handleRendirPrueba = (nombre: string) => {
        console.log(`Rendir prueba: ${nombre}`);
        navigate(`/evaluations/attempt/${1}`);
        // Aquí puedes agregar la lógica para manejar el evento de rendir prueba
    };

    const resaltarBusqueda = (texto: string) => {
        if (!busqueda) return texto;

        const regex = new RegExp(`(${busqueda})`, 'gi');
        const partes = texto.split(regex);

        return partes.map((parte: string, index: number) => 
            regex.test(parte) ? 
            <span key={index} style={{ backgroundColor: 'yellow' }}>{parte}</span> : 
            parte
        );
    };

    return (
        <Paper style={{ maxWidth: "100%", margin: 'auto', marginTop: 20, padding: '20px' }}>
            {/* <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>Evaluaciones por Rendir</Typography> */}
            <TextField 
                fullWidth 
                label="Buscar por texto" 
                variant="outlined" 
                onChange={(e) => setBusqueda(e.target.value)}
                style={{ marginBottom: '20px' }}
            />
            <List>
                {evaluacionesFiltradas.map((evaluacion, index) => (
                    <ListItem key={index} style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <ListItemText 
                            primary={<Typography variant="h6">{evaluacion.name}</Typography>} 
                            secondary={
                                <>
                                    <Typography variant="body1" style={{ margin: '10px 0' }}>
                                        {resaltarBusqueda(evaluacion.main_text)}
                                    </Typography>
                                    <Typography variant="body2">Número de preguntas: {evaluacion.questions.length}</Typography>
                                </>
                            } 
                        />
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => handleRendirPrueba(evaluacion.id)}
                            style={{ marginTop: '10px' }}
                        >
                            Rendir Prueba
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Typography, List, ListItem, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { obtenerPruebaPorId, Prueba } from './MockData'; // Asegúrate de que la ruta de importación sea correcta
import { useNavigate } from 'react-router-dom';
import { Succesull } from "./s";

export const AtempPage = () => {
    const [prueba, setPrueba] = useState<Prueba | null>(null);
    const { pruebaId } = useParams<{ pruebaId: string }>();
    const navigate = useNavigate();

    const [isTestCompleted, setIsTestCompleted] = useState(false);

    const handleTestCompletion = () => {
        setIsTestCompleted(true);
    };

    useEffect(() => {
        //@ts-ignore
        const datosDePrueba = obtenerPruebaPorId(pruebaId);
        setPrueba(datosDePrueba);
    }, [pruebaId]);

    if (!prueba) {
        return <div>Cargando prueba...</div>;
    }

    const handleRespuestaChange = (preguntaIndex: number, respuesta: string) => {
        // Agregar lógica para manejar cambio de respuesta
    };

    const handleSubmit = () => {
        handleTestCompletion()
    };

    const handleReturn = () => {
        // Lógica para volver al inicio o a otra pantalla
    };

   if(isTestCompleted) {

        return ( <Succesull onReturn={handleReturn} />)

    }

    return (
        <Paper style={{ maxWidth: "100%", margin: 'auto', marginTop: 20, marginBottom: 20, padding: '20px' }}>
            <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>{prueba.name}</Typography>
            <Typography variant="body1" style={{ marginBottom: '20px' }}>
                {prueba.main_text}
            </Typography>
            <List>
                {prueba.questions.map((question, index) => (
                    <ListItem key={index} style={{ marginBottom: '20px', flexDirection: "column", justifyContent: "flex-start", alignItems: "self-start" }}>
                        <Typography variant="h6">{`Pregunta ${index + 1}`}</Typography>
                        <Typography variant="body1" style={{ marginBottom: '10px' }}>{question.question_text}</Typography>
                        <RadioGroup onChange={(event) => handleRespuestaChange(index, event.target.value)}>
                            {question.options.map((option, idx) => (
                                <FormControlLabel key={idx} value={option} control={<Radio />} label={option} />
                            ))}
                        </RadioGroup>
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Enviar Respuestas
            </Button>
        </Paper>
    );

};

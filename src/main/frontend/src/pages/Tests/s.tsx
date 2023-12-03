import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export const Succesull = ({ onReturn }: any) => {
    return (
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', marginTop: 20}}>
        <CheckCircleOutlineIcon style={{ fontSize: '80px', color: 'green' }} />
        <Typography variant="h4" style={{ marginTop: '20px' }}>¡Prueba Completada!</Typography>
        <Typography variant="h5" style={{ margin: '20px 0' }}>Puntuación: 100</Typography>
        <Button variant="contained" color="primary" onClick={onReturn}>
            Volver al Inicio
        </Button>
    </Paper>
    )
}

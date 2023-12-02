import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const EvaluacionTable = ({ evaluaciones, onEdit, onDelete }: any) => {
    const getColorDificultad = (dificultad:any) => {

        const criterio = parseInt(dificultad)  < 3 ? 'BAJA' : parseInt(dificultad) < 5 ? 'MEDIO' : 'ALTA';

        switch(criterio) {
            case 'ALTA': return 'ALTA';
            case 'MEDIO': return 'MEDIA';
            case 'BAJA': return 'BAJA';
            default: return '';
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre de Evaluación</TableCell>
                        <TableCell align="right">Cantidad de Preguntas</TableCell>
                        <TableCell align="right">Dificultad</TableCell>
                        <TableCell align="right">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {evaluaciones.map((evaluacion:any) => (
                        <TableRow key={evaluacion.id}>
                            <TableCell component="th" scope="row">
                                {evaluacion.name}
                            </TableCell>
                            <TableCell align="right">{evaluacion.questions.length}</TableCell>
                            <TableCell align="right" >
                                {getColorDificultad(evaluacion.questions.length)}
                            </TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => onEdit(evaluacion.id)} color="primary">
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => onDelete(evaluacion.id)} color="secondary">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EvaluacionTable;

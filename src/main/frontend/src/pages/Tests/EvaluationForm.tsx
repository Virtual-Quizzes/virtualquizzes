import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography } from '@mui/material';

const EvaluationForm = ({ quizzes, onSave }: any) => {
    const [name, setName] = useState('');
    const [selectedQuizId, setSelectedQuizId] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSave({ name, selectedQuizId });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant='h4' mb={5}>
                Añadir 
            </Typography>
            <TextField
                label="Nombre de la Evaluación"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <FormControl fullWidth margin="normal" >
                <InputLabel>Plantilla</InputLabel>
                <Select
                    value={selectedQuizId}
                    onChange={(e) => setSelectedQuizId(e.target.value)}
                >
                    {quizzes.map((quiz: any) => (
                        <MenuItem key={quiz.id} value={quiz.id}>
                            {quiz.main_text.substring(0, 20)} - {quiz.questions.length} preguntas
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button sx={{ mt: 5}} type="submit" variant="contained" color="primary">
                Guardar Evaluación
            </Button>
        </form>
    );
};

export default EvaluationForm;

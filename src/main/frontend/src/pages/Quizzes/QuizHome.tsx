/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Box, Button, Grid, TextField } from '@mui/material';
import { pruebasMockeadas } from '../Tests/MockData';
import QuizList from './QuizzList';

export const QuizHome = () => {
  const [quizzes, setQuizzes] = useState(pruebasMockeadas);
  const [busqueda, setBusqueda] = useState('');

  const handleEdit = (id: any) => {
      console.log("Editar quiz", id);
      // Implementar lógica de edición
  };

  const handleDelete = (id: any) => {
      setQuizzes(quizzes.filter(quiz => quiz.id !== id));
  };

  const handleBusqueda = (event: any) => {
      setBusqueda(event.target.value.toLowerCase());
  };

  const quizzesFiltrados = busqueda
      ? quizzes.filter(quiz => quiz.main_text.toLowerCase().includes(busqueda))
      : quizzes;

  return (
      <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 0"}}>
            <Box width={"50%"}>
                <TextField
                    fullWidth 
                    label="Buscar" 
                    variant="outlined" 
                    onChange={handleBusqueda}
                />
            </Box>
            <Button variant="contained" color="primary">
                Añadir Nuevo Quiz
            </Button>
          </Box>
          <QuizList quizzes={quizzesFiltrados} onEdit={handleEdit} onDelete={handleDelete} />
      </Box>
  );
};

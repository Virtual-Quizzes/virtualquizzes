import React from 'react';
import Grid from '@mui/material/Grid';
import QuizCard from './QuizzCard';

const QuizList = ({ quizzes, onEdit, onDelete }: any) => {
    return (
        <Grid container spacing={2}>
            {quizzes.map((quiz: any) => (
                <Grid item xs={12} sm={6} md={4} key={quiz.id}>
                    <QuizCard quiz={quiz} onEdit={onEdit} onDelete={onDelete} />
                </Grid>
            ))}
        </Grid>
    );
};

export default QuizList;

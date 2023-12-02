import React from 'react';
import { Card, CardContent, Typography, IconButton, Grid, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const QuizCard = ({ quiz, onEdit, onDelete }: any) => {
    return (
        <Card sx={{minHeight: 200}}>
            <CardContent>
                <Box height={180}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {quiz.main_text.substring(0, 300)}...
                    </Typography>
                </Box>                
                <Grid container height={"10%"} justifyContent="space-between" alignItems={"self-end"}>
                    <Typography variant="body1">{quiz.questions.length} preguntas</Typography>
                   <Box>
                   <IconButton onClick={() => onEdit(quiz.id)} color="primary">
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => onDelete(quiz.id)} color="secondary">
                        <DeleteIcon />
                    </IconButton>
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default QuizCard;
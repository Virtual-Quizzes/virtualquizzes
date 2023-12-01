package com.juezcachimbo.virtualquizzes.service;

import com.juezcachimbo.virtualquizzes.model.Question;
import com.juezcachimbo.virtualquizzes.model.Quizz;

import java.util.List;
import java.util.Optional;
public interface QuizzService {

    List<Quizz> getAllQuizzes();
    Optional<Quizz> getQuizzById(Long id);

    Quizz saveQuizz(Quizz quizz);

    void deleteQuizz(Long id);
}

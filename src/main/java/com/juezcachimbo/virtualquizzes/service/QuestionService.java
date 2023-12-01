package com.juezcachimbo.virtualquizzes.service;

import com.juezcachimbo.virtualquizzes.model.Question;

import java.util.List;
import java.util.Optional;

public interface QuestionService {
    Optional<Question> getQuestionById(Long id);


}
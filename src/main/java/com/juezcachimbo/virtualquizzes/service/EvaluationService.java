package com.juezcachimbo.virtualquizzes.service;

import com.juezcachimbo.virtualquizzes.model.Evaluation;

import java.util.List;
import java.util.Optional;

public interface EvaluationService {
    List<Evaluation> getAllEvaluations();

    Optional<Evaluation> getEvaluationById(Long id);

    Evaluation saveEvaluation(Evaluation evaluation);

    void deleteEvaluation(Long id);
}

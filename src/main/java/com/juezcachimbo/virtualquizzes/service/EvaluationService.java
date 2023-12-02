package com.juezcachimbo.virtualquizzes.service;

import com.juezcachimbo.virtualquizzes.model.Evaluation;
import com.juezcachimbo.virtualquizzes.model.EvaluationRequest;

import java.util.List;
import java.util.Optional;

public interface EvaluationService {
    List<Evaluation> getAllEvaluations();

    Optional<Evaluation> getEvaluationById(Long id);

    Evaluation saveEvaluation(Evaluation evaluation);

    Evaluation attempt(Long id, EvaluationRequest evaluationRequest);

    void deleteEvaluation(Long id);
}

package com.juezcachimbo.virtualquizzes.service.Implementation;

import com.juezcachimbo.virtualquizzes.model.Evaluation;
import com.juezcachimbo.virtualquizzes.repository.EvaluationRepository;
import com.juezcachimbo.virtualquizzes.service.EvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EvaluationServiceImplementation implements EvaluationService {
    private final EvaluationRepository evaluationRepository;

    @Autowired
    public EvaluationServiceImplementation(EvaluationRepository evaluationRepository) {
        this.evaluationRepository = evaluationRepository;
    }

    @Override
    public List<Evaluation> getAllEvaluations() {
        return evaluationRepository.findAll();
    }

    @Override
    public Optional<Evaluation> getEvaluationById(Long id) {
        Optional<Evaluation> evaluation = evaluationRepository.findById(id);
        if (evaluation.isPresent()) {

        }
        return evaluationRepository.findById(id);
    }

    @Override
    public Evaluation saveEvaluation(Evaluation book) {
        return evaluationRepository.save(book);
    }

    @Override
    public void deleteEvaluation(Long id) {
        evaluationRepository.deleteById(id);
    }

}

package com.juezcachimbo.virtualquizzes.controller;

import com.juezcachimbo.virtualquizzes.model.Evaluation;
import com.juezcachimbo.virtualquizzes.model.EvaluationRequest;
import com.juezcachimbo.virtualquizzes.service.EvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/evaluations")
public class EvaluationRestController {
    private final EvaluationService evaluationService;

    @Autowired
    public EvaluationRestController(EvaluationService evaluationService) {
        this.evaluationService = evaluationService;
    }

    @GetMapping
    public ResponseEntity<List<Evaluation>> getAllEvaluations() {
        List<Evaluation> evaluations = evaluationService.getAllEvaluations();
        return ResponseEntity.ok(evaluations);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Evaluation> getEvaluationById(@PathVariable Long id) {
        Optional<Evaluation> evaluation = evaluationService.getEvaluationById(id);
        return evaluation.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Evaluation> addEvaluation(@RequestBody Evaluation evaluation) {
        /*
        1. con el group_id que recibí debo obtener todos los estudiantes del grupo
        2. debo recorrer o iterar con for a los estudiantes y crear una evaluación para cada uno de ellos.
        3. se responde que ha sido guardada para un grupo especifico
         */
        Evaluation savedEvaluation = evaluationService.saveEvaluation(evaluation);
        return ResponseEntity.ok(savedEvaluation);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Evaluation> attempt(@PathVariable Long id, @RequestBody EvaluationRequest evaluationRequest) {
        // Llamada al método que calcula el puntaje y actualiza la evaluación
        Evaluation updatedEvaluation = evaluationService.attempt(id, evaluationRequest);
        return ResponseEntity.ok(updatedEvaluation);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvaluation(@PathVariable Long id) {
        evaluationService.deleteEvaluation(id);
        return ResponseEntity.noContent().build();
    }
}

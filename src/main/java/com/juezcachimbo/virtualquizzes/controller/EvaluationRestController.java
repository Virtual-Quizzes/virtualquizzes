package com.juezcachimbo.virtualquizzes.controller;

import com.juezcachimbo.virtualquizzes.model.Evaluation;
import com.juezcachimbo.virtualquizzes.model.EvaluationRequest;
import com.juezcachimbo.virtualquizzes.model.StudentGroup;
import com.juezcachimbo.virtualquizzes.security.user.User;
import com.juezcachimbo.virtualquizzes.service.EvaluationService;
import com.juezcachimbo.virtualquizzes.service.StudentGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/evaluations")
public class EvaluationRestController {
    private final EvaluationService evaluationService;
    private final StudentGroupService groupService;

    @Autowired
    public EvaluationRestController(EvaluationService evaluationService, StudentGroupService groupService) {
        this.evaluationService = evaluationService;
        this.groupService = groupService;
    }

    // Gets all Evaluations, works fine ✅
    @GetMapping
    public ResponseEntity<List<Evaluation>> getAllEvaluations() {
        List<Evaluation> evaluations = evaluationService.getAllEvaluations();
        return ResponseEntity.ok(evaluations);
    }

    // Gets Evaluation by Id, works fine ✅
    @GetMapping("/{id}")
    public ResponseEntity<Evaluation> getEvaluationById(@PathVariable Long id) {
        Optional<Evaluation> evaluation = evaluationService.getEvaluationById(id);
        return evaluation.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // Creates and Adds Evaluation to a Specific Group by its Id and to its students as well, works fine ✅
    @PostMapping("/addEvaluation")
    public ResponseEntity<String> addEvaluation(@RequestParam("id_group") long idGroup, @RequestBody Evaluation evaluation) {

        // 1. Obtener todos los estudiantes del grupo
        List<Long> studentIds = new ArrayList<>();
        Optional<StudentGroup> group = groupService.getGroupById(idGroup);
        if (group.isPresent()) {
            studentIds = group.get().getStudent_ids();
        }

        // 2. Iterar sobre los estudiantes y crear una evaluación template para cada uno
        for (Long studentId : studentIds) {

            evaluation.setGroup_id(idGroup);
            evaluation.setStudent_id(studentId);

            System.out.println(evaluation);
            evaluationService.saveEvaluation(evaluation);

        }
        // 3. Responder que ha sido guardada para un grupo específico
        return ResponseEntity.ok("Evaluaciones creadas para el grupo con ID " + idGroup);
    }

    // Calculates Evaluation's score and updates its state, works fine ✅
    @PutMapping("/{id}")
    public ResponseEntity<Evaluation> attempt(@PathVariable Long id, @RequestBody EvaluationRequest evaluationRequest) {
        Evaluation updatedEvaluation = evaluationService.attempt(id, evaluationRequest);
        return ResponseEntity.ok(updatedEvaluation);
    }

    // Deletes Evaluation, works fine ✅
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvaluation(@PathVariable Long id) {
        evaluationService.deleteEvaluation(id);
        return ResponseEntity.noContent().build();
    }
}

package com.juezcachimbo.virtualquizzes.controller;

import com.juezcachimbo.virtualquizzes.model.Quizz;
import com.juezcachimbo.virtualquizzes.service.QuizzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/quizzes")
public class QuizzRestControler {
    private final QuizzService quizzService;

    @Autowired
    public QuizzRestControler(QuizzService quizzService) {
        this.quizzService = quizzService;
    }

    @GetMapping
    public ResponseEntity<List<Quizz>> getAllQuizzes() {
        List<Quizz> quizzes = quizzService.getAllQuizzes();
        return ResponseEntity.ok(quizzes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quizz> getQuizzById(@PathVariable Long id) {
        Optional<Quizz> quizz = quizzService.getQuizzById(id);
        return quizz.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Quizz> addQuizz(@RequestBody Quizz quizz) {
        Quizz savedQuizz = quizzService.saveQuizz(quizz);
        return ResponseEntity.ok(savedQuizz);
    }

    // @DeleteMapping("/{id}")
    // public ResponseEntity<Void> deleteQuizz(@PathVariable Long id) {
        // quizzService.deleteQuizz(id);
        // return ResponseEntity.noContent().build();
    //}
}

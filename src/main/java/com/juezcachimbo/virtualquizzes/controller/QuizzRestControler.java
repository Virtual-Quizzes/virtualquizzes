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
@CrossOrigin( origins = { "http://localhost:8080", "http://localhost:5173" })
public class QuizzRestControler {
    private final QuizzService quizzService;

    @Autowired
    public QuizzRestControler(QuizzService quizzService) {
        this.quizzService = quizzService;
    }

    // Gets all Quizzes, works fine ✅
    @GetMapping
    public ResponseEntity<List<Quizz>> getAllQuizzes() {
        List<Quizz> quizzes = quizzService.getAllQuizzes();
        return ResponseEntity.ok(quizzes);
    }

    // Gets Quizz by Id, works fine ✅
    @GetMapping("/{id}")
    public ResponseEntity<Quizz> getQuizzById(@PathVariable Long id) {
        Optional<Quizz> quizz = quizzService.getQuizzById(id);
        return quizz.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // Creates Quizz, works fine ✅
    @PostMapping
    public ResponseEntity<Quizz> addQuizz(@RequestBody Quizz quizz) {
        Quizz savedQuizz = quizzService.saveQuizz(quizz);
        return ResponseEntity.ok(savedQuizz);
    }

    // Updates Quizz, works fine ✅
    @PutMapping("/{id}")
    public Quizz updateQuizz(@PathVariable Long id, @RequestBody Quizz updatedQuizz) {
        return ResponseEntity.ok(quizzService.updateQuizz(id, updatedQuizz)).getBody();
    }

    // Deletes quizz, works fine ✅
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuizz(@PathVariable Long id) {
        quizzService.deleteQuizzById(id);
        return ResponseEntity.noContent().build();
    }
}

package com.juezcachimbo.virtualquizzes.service.Implementation;

import com.juezcachimbo.virtualquizzes.model.Question;
import com.juezcachimbo.virtualquizzes.model.Quizz;
import com.juezcachimbo.virtualquizzes.repository.QuizzRepository;
import com.juezcachimbo.virtualquizzes.service.QuizzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuizzServiceImplementation implements QuizzService {
    private final QuizzRepository quizzRepository;

    @Autowired
    public QuizzServiceImplementation(QuizzRepository quizzRepository) {
        this.quizzRepository = quizzRepository;
    }

    @Override
    public List<Quizz> getAllQuizzes() {
        return quizzRepository.findAll();
    }

    @Override
    public Optional<Quizz> getQuizzById(Long id) {
        return quizzRepository.findById(id);
    }

    @Override
    public Quizz saveQuizz(Quizz quizz) {
        return quizzRepository.save(quizz);
    }

    @Override
    public void deleteQuizz(Long id) {
        quizzRepository.deleteById(id);
    }
}
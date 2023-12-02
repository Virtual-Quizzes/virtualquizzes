package com.juezcachimbo.virtualquizzes.service.Implementation;

import com.juezcachimbo.virtualquizzes.model.Question;
import com.juezcachimbo.virtualquizzes.model.Quizz;
import com.juezcachimbo.virtualquizzes.repository.QuizzRepository;
import com.juezcachimbo.virtualquizzes.service.QuizzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
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
    @Override
    public Quizz updateQuizz(Long id, Quizz quizz) {
            Quizz quizzDB = quizzRepository.findById(id).orElse(null);

            if (quizzDB == null) {
                // Manejar el caso en el que no se encuentra el Quizz con el ID proporcionado.
                // Puedes lanzar una excepción o manejarlo de alguna otra manera.
                return null;
            }

            if (Objects.nonNull(quizz.getMain_text()) && !"".equalsIgnoreCase(quizz.getMain_text())) {
                quizzDB.setMain_text(quizz.getMain_text());
            }

            List<Question> updatedQuestions = quizz.getQuestions();
            if (updatedQuestions != null && !updatedQuestions.isEmpty()) {
                // Actualizar todas las preguntas en la lista actual
                quizzDB.setQuestions(updatedQuestions);
            }

            return quizzRepository.save(quizzDB);
        }
}
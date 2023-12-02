package com.juezcachimbo.virtualquizzes.service.Implementation;

import com.juezcachimbo.virtualquizzes.model.*;
import com.juezcachimbo.virtualquizzes.repository.EvaluationRepository;
import com.juezcachimbo.virtualquizzes.repository.QuizzRepository;
import com.juezcachimbo.virtualquizzes.service.EvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EvaluationServiceImplementation implements EvaluationService {
    private final EvaluationRepository evaluationRepository;
    private final QuizzRepository quizzRepository;

    @Autowired
    public EvaluationServiceImplementation(EvaluationRepository evaluationRepository, QuizzRepository quizzRepository) {
        this.evaluationRepository = evaluationRepository;
        this.quizzRepository = quizzRepository;
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
    public Evaluation saveEvaluation(Evaluation evaluation) {
        return evaluationRepository.save(evaluation);
    }

    @Override
    public Evaluation attempt(Long id, EvaluationRequest evaluationRequest) {
        Optional<Evaluation> currentEvaluation = evaluationRepository.findById(evaluationRequest.getQuizz_id());
        Long targetQuizzId = currentEvaluation.get().getQuizz_id();

        // Obtener el Quizz asociado a la evaluación actual
        Optional<Quizz> quizz = quizzRepository.findById(targetQuizzId);

        // Obtener las preguntas del quizz
        List<Question> quizzQuestions = quizz.get().getQuestions();

        // Obtener las respuestas del usuario
        List<QuestionUserResponse> userResponses = evaluationRequest.getUser_response();

        int correctAnswersCount = 0;
        // Recorrer las respuestas del usuario
        for (QuestionUserResponse userResponse : userResponses) {
            // Obtener la pregunta asociada a la respuesta actual
            Optional<Question> matchingQuestion = quizzQuestions.stream()
                    .filter(question -> question.getId() == userResponse.getQuestion_id())
                    .findFirst();

            // Verificar si hay una pregunta coincidente
            if (matchingQuestion.isPresent()) {
                // Comparar la respuesta del usuario con la respuesta correcta de la pregunta
                char userAnswer = userResponse.getResponse();
                char correctAnswer = matchingQuestion.get().getCorrectAnswer();

                // Realizar la comparación
                if (userAnswer == correctAnswer || userAnswer == Character.toUpperCase(correctAnswer)) {
                    // La respuesta es correcta (puedes realizar acciones necesarias)
                    correctAnswersCount++;
                }
            }
        }

        // Calcular el puntaje en una escala de 0 a 100
        int totalQuestions = quizzQuestions.size();
        double rawScore = ((double) correctAnswersCount / totalQuestions) * 100;

        // Almacenar el puntaje en la variable
        int score = (int) Math.round(rawScore);

        // TO DO🤯: Devuelve la evaluación con nuevo score

        // Actualizar el puntaje en la evaluación actual
        currentEvaluation.get().setScore(score);

        // Actualizar el estado del evaluation
        currentEvaluation.get().setHas_finished(true);

        // Guardar la evaluación actualizada en la base de datos
        evaluationRepository.save(currentEvaluation.get());

        // Devuelve la evaluación con el nuevo score
        return currentEvaluation.get();
    }


    @Override
    public void deleteEvaluation(Long id) {
        evaluationRepository.deleteById(id);
    }

}

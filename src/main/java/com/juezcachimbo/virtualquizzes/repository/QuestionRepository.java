package com.juezcachimbo.virtualquizzes.repository;

import com.juezcachimbo.virtualquizzes.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}

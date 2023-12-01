package com.juezcachimbo.virtualquizzes.repository;

import com.juezcachimbo.virtualquizzes.model.Quizz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizzRepository extends JpaRepository<Quizz, Long> {
}

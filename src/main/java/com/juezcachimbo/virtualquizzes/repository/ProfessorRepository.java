package com.juezcachimbo.virtualquizzes.repository;

import com.juezcachimbo.virtualquizzes.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfessorRepository extends JpaRepository<Professor, Long> {

}

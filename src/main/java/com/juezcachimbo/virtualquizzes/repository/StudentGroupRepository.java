package com.juezcachimbo.virtualquizzes.repository;

import com.juezcachimbo.virtualquizzes.model.StudentGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentGroupRepository extends JpaRepository<StudentGroup, Long > {
}

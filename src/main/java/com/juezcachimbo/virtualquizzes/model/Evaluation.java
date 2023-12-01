package com.juezcachimbo.virtualquizzes.model;

import com.juezcachimbo.virtualquizzes.repository.QuizzRepository;
import com.juezcachimbo.virtualquizzes.service.Implementation.QuizzServiceImplementation;
import com.juezcachimbo.virtualquizzes.service.QuizzService;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.Optional;

@Entity
@Data
public class Evaluation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int group_id;
    private String name;
    private int score;
    private int student_id = 0;
    @ElementCollection
    private List<Integer> quizzes_ids;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Quizz> quizzes;
}
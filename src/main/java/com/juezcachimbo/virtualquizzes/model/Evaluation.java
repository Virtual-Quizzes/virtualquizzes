package com.juezcachimbo.virtualquizzes.model;

import com.juezcachimbo.virtualquizzes.repository.QuizzRepository;
import com.juezcachimbo.virtualquizzes.service.Implementation.QuizzServiceImplementation;
import com.juezcachimbo.virtualquizzes.service.QuizzService;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

import java.util.List;
import java.util.Optional;

@Entity
@Data
@Getter
public class Evaluation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int group_id;
    private String name;
    private int score;
    private int student_id = 0;
    private boolean has_finished = false;
    private long quizz_id;
}
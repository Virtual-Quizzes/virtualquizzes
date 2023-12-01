package com.juezcachimbo.virtualquizzes.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Evaluation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int group_id;
    private String quizzes_ids;
    private String name;
    private int score;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Quizz> quizzes;

    public Evaluation(int group_id, String quizzes_ids, String name, int score) {
        this.group_id = group_id;
        this.quizzes_ids = quizzes_ids;
        this.name = name;
        this.score = score;
    }

    public Evaluation() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
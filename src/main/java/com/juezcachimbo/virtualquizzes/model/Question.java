package com.juezcachimbo.virtualquizzes.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String text;
    @ElementCollection
    private List<String> options;
    private char correctAnswer;
    private String reason;
}

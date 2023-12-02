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
    @Lob
    private String question_text;
    @ElementCollection
    private List<String> options;
    private char correctAnswer;
    @Lob
    private String reasoning;
}

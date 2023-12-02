package com.juezcachimbo.virtualquizzes.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class EvaluationDTO {

    private String name;
    private int score;
    private int groupId;
    private int studentId;
    private List<Integer> quizzesIds;

    // Constructors
    public EvaluationDTO() {
    }

    public EvaluationDTO(String name, int score, int groupId, int studentId, List<Integer> quizzesIds) {
        this.name = name;
        this.score = score;
        this.groupId = groupId;
        this.studentId = studentId;
        this.quizzesIds = quizzesIds;
    }
}

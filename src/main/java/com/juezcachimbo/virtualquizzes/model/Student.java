package com.juezcachimbo.virtualquizzes.model;
import org.cpsolver.coursett.model.StudentGroup;
import jakarta.persistence.*;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String name;
    private int score;

    //atributosnuevos puem
    private StudentGroup group;
    private ResultQuizz[] quizzesTaken;

    public Student() {
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

    public StudentGroup getGroup() {
        return group;
    }

    public void setGroup(StudentGroup group) {
        this.group = group;
    }

    public ResultQuizz[] getQuizzesTaken() {
        return quizzesTaken;
    }

    public void setQuizzesTaken(ResultQuizz[] quizzesTaken) {
        this.quizzesTaken = quizzesTaken;
    }

}
package com.juezcachimbo.virtualquizzes.model;

import com.juezcachimbo.virtualquizzes.security.user.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class StudentGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Long professor_id;
    private String name;

    @ElementCollection
    private List<Long> student_ids;

    //public List<Long> getStudentIds() {
        //return this.student_ids;
    //}
}

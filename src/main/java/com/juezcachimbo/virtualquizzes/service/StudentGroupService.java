package com.juezcachimbo.virtualquizzes.service;

import com.juezcachimbo.virtualquizzes.model.StudentGroup;
import com.juezcachimbo.virtualquizzes.security.user.User;

import java.util.List;
import java.util.Optional;

public interface StudentGroupService {

    List<StudentGroup> getAllGroups();

    Optional<StudentGroup> getGroupById(Long id);

    StudentGroup saveGroup(StudentGroup group);

    void deleteGroup(Long id);

    List<Optional<User>> getStudents(List<Long> ids);

    void addStudents(List<Long> ids, Long groupId);
}

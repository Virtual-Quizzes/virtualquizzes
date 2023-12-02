package com.juezcachimbo.virtualquizzes.controller;

import com.juezcachimbo.virtualquizzes.model.JsonArray;
import com.juezcachimbo.virtualquizzes.model.StudentGroup;
import com.juezcachimbo.virtualquizzes.security.user.User;
import com.juezcachimbo.virtualquizzes.service.StudentGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/studentgroups")
@CrossOrigin( origins = { "http://localhost:8080", "http://localhost:5173" })
public class StudentGroupRestController {

    private final StudentGroupService groupService;

    @Autowired
    public StudentGroupRestController(StudentGroupService groupService) {
        this.groupService = groupService;
    }

    @GetMapping
    public ResponseEntity<List<StudentGroup>> getAllGroups() {
        List<StudentGroup> groups = groupService.getAllGroups();
        return ResponseEntity.ok(groups);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StudentGroup> getGroupById(Long id) {
        Optional<StudentGroup> group = groupService.getGroupById(id);
        return group.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<StudentGroup> addGroup(@RequestBody StudentGroup group) {
        StudentGroup savedGroup = groupService.saveGroup(group);
        return ResponseEntity.ok(savedGroup);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGroup(@PathVariable Long id) {
        groupService.deleteGroup(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/students")
    public ResponseEntity<List<Optional<User>>> getStudents(@PathVariable Long id) {
        List<Long> ids = new ArrayList<>();
        Optional<StudentGroup> group = groupService.getGroupById(id);
        if (group.isPresent()) {
            ids = group.get().getStudent_ids();
        }

        List<Optional<User>> students = groupService.getStudents(ids);
        return ResponseEntity.ok(students);
    }

    @PutMapping("/{id}/addStudents")
    public StudentGroup addStudents(@RequestBody JsonArray ids, @PathVariable Long id) {
        return ResponseEntity.ok(groupService.addStudents(ids.getIds(), id)).getBody();
    }
}

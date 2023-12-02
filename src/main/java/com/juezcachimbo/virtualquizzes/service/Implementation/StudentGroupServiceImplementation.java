package com.juezcachimbo.virtualquizzes.service.Implementation;

import com.juezcachimbo.virtualquizzes.model.StudentGroup;
import com.juezcachimbo.virtualquizzes.repository.StudentGroupRepository;
import com.juezcachimbo.virtualquizzes.security.user.Role;
import com.juezcachimbo.virtualquizzes.security.user.User;
import com.juezcachimbo.virtualquizzes.security.user.UserRepository;
import com.juezcachimbo.virtualquizzes.service.StudentGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentGroupServiceImplementation implements StudentGroupService {

    private final StudentGroupRepository groupRepository;
    private final UserRepository userRepository;

    @Autowired
    public StudentGroupServiceImplementation(StudentGroupRepository groupRepository, UserRepository userRepository) {
        this.groupRepository = groupRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<StudentGroup> getAllGroups() {
        return groupRepository.findAll();
    }

    @Override
    public Optional<StudentGroup> getGroupById(Long id) {
        return groupRepository.findById(id);
    }

    @Override
    public StudentGroup saveGroup(StudentGroup group) {
        return groupRepository.save(group);
    }

    @Override
    public void deleteGroup(Long id) {
        groupRepository.deleteById(id);
    }

    @Override
    public List<Optional<User>> getStudents(List<Long> ids) {
        List<Optional<User>> users = new ArrayList<>();
        for (long id:ids) {
            if (userRepository.findById(id).isPresent())
                users.add(userRepository.findById(id));
        }
        return users;
    }

    @Override
    public StudentGroup addStudents(List<Long> ids, Long groupId) {
        StudentGroup group = groupRepository.findById(groupId).orElse(null);
        assert group != null;
        List<Long> newIds = group.getStudent_ids();
        for (Long id : ids) {
            if (userRepository.findById(id).isPresent() && userRepository.findById(id).get().getRole() == Role.STUDENT) {
                newIds.add(id);
            }
        }

        assert group != null;
        group.setStudent_ids(newIds);

        return groupRepository.save(group);
    }
}

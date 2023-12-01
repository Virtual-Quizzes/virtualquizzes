package com.juezcachimbo.virtualquizzes.service.Implementation;

import com.juezcachimbo.virtualquizzes.model.Professor;
import com.juezcachimbo.virtualquizzes.repository.ProfessorRepository;
import com.juezcachimbo.virtualquizzes.service.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfessorServiceImplementation implements ProfessorService {
    private final ProfessorRepository professorRepository;

    @Autowired
    public ProfessorServiceImplementation(ProfessorRepository professorRepository) {
        this.professorRepository = professorRepository;
    }

    @Override
    public List<Professor> getAllProfessors() {
        return professorRepository.findAll();
    }

    @Override
    public Optional<Professor> getProfessorById(Long id) {
        return professorRepository.findById(id);
    }

    @Override
    public Professor saveProfessor(Professor professor) {
        return professorRepository.save(professor);
    }

    @Override
    public void deleteProfessor(Long id) {
        professorRepository.deleteById(id);
    }
}

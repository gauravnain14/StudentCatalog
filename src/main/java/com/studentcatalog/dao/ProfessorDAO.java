package com.studentcatalog.dao;
import com.studentcatalog.entity.Professor;
import java.util.List;

public interface ProfessorDAO {
    List<Professor> findAll();
    Professor findById(int id);
    List<Professor> findByName(String firstName, String lastName);
    void createProfessor(Professor student);
    void deleteProfessorById(int id);
}

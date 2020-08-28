package com.studentcatalog.rest;

import com.studentcatalog.dao.ProfessorDAOImpl;
import com.studentcatalog.entity.Professor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class ProfessorController {

    private final ProfessorDAOImpl professorDAOImpl;

    @Autowired
    public ProfessorController(ProfessorDAOImpl professorDAOImpl){
        this.professorDAOImpl = professorDAOImpl;
    }

    @GetMapping("professors/list")
    public List<Professor> findAll(){
        return professorDAOImpl.findAll();
    }

    @GetMapping("professors/{id}")
    public Professor findById(@PathVariable("professor_id") int id){
        Professor professor = professorDAOImpl.findById(id);
        return professor;
    }

    @GetMapping("professors/first_name/{firstName}/last_name/{lastName}")
    public List<Professor> findById(@PathVariable("first_name") String firstName,
                                  @PathVariable("last_name") String lastName){
        List<Professor> professors = professorDAOImpl.findByName(firstName, lastName);
        return professors;
    }
    @PostMapping("professors/addProfessors")
    public void addProfessor(@RequestBody Professor professor){
        professor.setProfessorId(0);
        professorDAOImpl.createProfessor(professor);
    }
}

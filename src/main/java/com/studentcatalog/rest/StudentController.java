package com.studentcatalog.rest;

import com.studentcatalog.dao.StudentDAOImpl;
import com.studentcatalog.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class StudentController {

    private final StudentDAOImpl studentDAOImpl;

    @Autowired
    public StudentController(StudentDAOImpl studentDAOImpl){
        this.studentDAOImpl = studentDAOImpl;
    }

    @GetMapping("students/list")
    public List<Student> findAll(){
        return studentDAOImpl.findAll();
    }

    @GetMapping("students/{id}")
    public Student findById(@PathVariable("student_id") int id){
        Student student = studentDAOImpl.findById(id);
        return student;
    }

    @GetMapping("students/first_name/{firstName}/last_name/{lastName}")
    public List<Student> findById(@PathVariable("first_name") String firstName,
                                  @PathVariable("last_name") String lastName){
        List<Student> students = studentDAOImpl.findByName(firstName, lastName);
        return students;
    }
    @PostMapping("students/addStudent")
    public Student addStudent(@RequestBody Student student){
        student.setStudentId(0);
        studentDAOImpl.createStudent(student);
        return student;
    }
}

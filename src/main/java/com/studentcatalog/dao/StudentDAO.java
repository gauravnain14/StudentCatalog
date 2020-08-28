package com.studentcatalog.dao;

import com.studentcatalog.entity.Student;

import java.util.List;

public interface StudentDAO {
    List<Student> findAll();
    Student findById(int id);
    List<Student> findByName(String firstName, String lastName);
    void createStudent(Student student);
    void deleteStudentById(int id);
}

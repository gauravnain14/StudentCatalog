package com.studentcatalog.dao;

import com.studentcatalog.entity.Student;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class StudentDAOImpl implements StudentDAO{

    private EntityManager entityManager;

    @Autowired
    public StudentDAOImpl(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public List<Student> findAll(){
        Session session = entityManager.unwrap(Session.class);
        Query<Student> query = session.createQuery("FROM student");
        List<Student> students = query.getResultList();
        return students;
    }

    @Override
    @Transactional
    public Student findById(int id){
        Session session = entityManager.unwrap(Session.class);
        Student student = session.get(Student.class, id);
        return student;
    }

    @Override
    @Transactional
    public List<Student> findByName(String firstName, String lastName){
        Session session = entityManager.unwrap(Session.class);
        Query<Student> query = session.createQuery("FROM student WHERE student_first_name=:firstName AND student_last_name=:lastName");
        query.setParameter("firstName", firstName);
        query.setParameter("lastName", lastName);
        List<Student> students = query.getResultList();
        return students;
    }

    @Override
    @Transactional
    public void createStudent(Student student){
        Session session = entityManager.unwrap(Session.class);
        session.save(student);
    }

    @Override
    @Transactional
    public void deleteStudentById(int studentId){
        Session session = entityManager.unwrap(Session.class);
        Query<Student> query = session.createQuery("DELETE FROM Student WHERE student_id=:ID");
        query.setParameter("ID", studentId);
        query.executeUpdate();
    }

}

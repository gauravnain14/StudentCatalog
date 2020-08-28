package com.studentcatalog.dao;

import com.studentcatalog.entity.Professor;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class ProfessorDAOImpl implements ProfessorDAO{

    private EntityManager entityManager;

    @Autowired
    public ProfessorDAOImpl(EntityManager entityManager){
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public List<Professor> findAll(){
        Session session = entityManager.unwrap(Session.class);
        Query<Professor> query = session.createQuery("FROM Professor");
        List<Professor> professors = query.getResultList();
        return professors;
    }

    @Override
    @Transactional
    public Professor findById(int id){
        Session session = entityManager.unwrap(Session.class);
        Professor professor = session.get(Professor.class, id);
        return professor;
    }

    @Override
    @Transactional
    public List<Professor> findByName(String firstName, String lastName){
        Session session = entityManager.unwrap(Session.class);
        Query<Professor> query = session.createQuery("FROM professor WHERE professor_first_name=:firstName AND professor_last_name=:lastName");
        query.setParameter("firstName", firstName);
        query.setParameter("lastName", lastName);
        List<Professor> professors = query.getResultList();
        return professors;
    }

    @Override
    @Transactional
    public void createProfessor(Professor professor){
        Session session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(professor);
    }

    @Override
    @Transactional
    public void deleteProfessorById(int professorId){
        Session session = entityManager.unwrap(Session.class);
        Query<Professor> query = session.createQuery("DELETE FROM Professor WHERE professor_id=:ID");
        query.setParameter("ID", professorId);
        query.executeUpdate();
    }

}

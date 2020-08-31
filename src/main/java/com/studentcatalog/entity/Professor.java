package com.studentcatalog.entity;
import javax.persistence.*;

@Entity
@Table(name= "professor")
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "professor_id")
    private int professorId;

    @Column(name = "professor_first_name")
    private String professorFirstName;

    @Column(name = "professor_last_name")
    private String professorLastName;

    @Column(name = "professor_ssn")
    private String professor_ssn;

    public Professor() {
        this.professorId = 0;
        this.professorFirstName = "";
        this.professorLastName = "";
        this.professor_ssn = "";
    }

    public Professor(int professorId, String professorFirstName, String professorLastName, String professor_ssn) {
        this.professorId = professorId;
        this.professorFirstName = professorFirstName;
        this.professorLastName = professorLastName;
        this.professor_ssn = professor_ssn;
    }

    public int getProfessorId() {
        return professorId;
    }

    public void setProfessorId(int professorId) {
        this.professorId = professorId;
    }

    public String getProfessorFirstName() {
        return professorFirstName;
    }

    public void setProfessorFirstName(String professorFirstName) {
        this.professorFirstName = professorFirstName;
    }

    public String getProfessorLastName() {
        return professorLastName;
    }

    public void setProfessorLastName(String professorLastName) {
        this.professorLastName = professorLastName;
    }

    public String getProfessor_ssn() {
        return professor_ssn;
    }

    public void setProfessor_ssn(String professor_ssn) {
        this.professor_ssn = professor_ssn;
    }

    @Override
    public String toString() {
        return "Professor{" +
                "professorId=" + professorId +
                ", professorFirstName='" + professorFirstName + '\'' +
                ", professorLastName='" + professorLastName + '\'' +
                ", professor_ssn='" + professor_ssn + '\'' +
                '}';
    }
}

import axios from 'axios'

class StudentDataService {

  getAllStudents() {
    return axios.get(`http://localhost:8080/students/list`)
  }

  getStudentByName(firstName, lastName) {
    return axios.get(`http://localhost:8080/students/first_name/${lastName}/last_name/${firstName}`)
  }

  addStudent(student) {
    return axios.post(`http://localhost:8080/students/addStudent`, student)
  }
}

export default new StudentDataService()
import axios from 'axios'

class ProfessorDataService {

  getAllProfessors() {
    return axios.get(`http://localhost:8080/professors/list`)
  }

  getProfessorByName(firstName, lastName) {
    return axios.get(`http://localhost:8080/professors/first_name/${lastName}/last_name/${firstName}`)
  }

  addProfessor(professor) {
    return axios.post(`http://localhost:8080/professors/addProfessors`, professor)
  }
}

export default new ProfessorDataService()
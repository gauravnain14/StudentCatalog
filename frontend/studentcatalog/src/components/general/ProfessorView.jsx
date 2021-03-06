import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProfessorDataService from '../../services/ProfessorDataService'

export default class ProfessorView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      professors: [],
      message: null
    }
    this.refreshProfessorDirectory = this.refreshProfessorDirectory.bind(this)
    this.updateProfessorDirectory = this.updateProfessorDirectory.bind(this)
    }

    componentDidMount() {
      this.refreshProfessorDirectory()
    }

    refreshProfessorDirectory() {
        ProfessorDataService.getAllProfessors().then(response => {this.setState({professors: response.data})})
    }

    updateProfessorDirectory(lastName, firstName) {
        ProfessorDataService.getProfessorByName(lastName, firstName).then(response => {this.setState({professors: response.data})})
    }

  render() {
    return(
      <div className="container" style={{backgroundColor: "yellowgreen", color: "white"}}>
        <h1 style={{textAlign:"center"}}>
          <table className="table" style={{backgroundColor: "yellowgreen", color: "black"}}>
            <tr>
              <td><Link to="/">Student View</Link><h5>(<Link to="/addStudent">Add Student</Link>)</h5></td>
              <td><Link to="/professorView">Professor View</Link><h5>(<Link to="/addProfessor">Add Professor</Link>)</h5></td>
              </tr>
          </table>
          </h1>
          <div style={{backgroundColor: 'yellowgreen', color: "black"}}><h5>Search/Sort function under maintenance</h5></div>
        <div className="jumbotron" style={{backgroundColor: '#129FFF', color: "white"}}>
          <table className="table">
            <thead>
              <tr style={{textAlign: "center", color: "black"}}>
                <th><b><h4>First Name</h4></b></th>
                <th><b><h4>Last Name</h4></b></th>
                <th><b><h4>SSN</h4></b></th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.professors.map(professors =>
                <tr style={{textAlign: "center"}} key={professors.professorId}>
                  <td>{professors.professorFirstName}</td>
                  <td>{professors.professorLastName}</td>
                  <td>{professors.professor_ssn}</td>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
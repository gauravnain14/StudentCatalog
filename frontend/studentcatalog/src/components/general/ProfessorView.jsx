import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import ProfessorDataService from '../../services/ProfessorDataService'

class ProfessorView extends Component {
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
      <div className="container">
        <h1 style={{textAlign:"center"}}>
          <table className="table">
            <tr>
              <td><Link to="/">Student View</Link><h5>(<Link to="/addStudent">Add Student</Link>)</h5></td>
              <td><Link to="/professorView">Professor View</Link><h5>(<Link to="/addProfessor">Add Professor</Link>)</h5></td>
              </tr>
          </table>
          </h1>
        <div className="jumbotron" style={{backgroundColor: "gray", color: "white"}}>
          <table className="table">
            <thead>
              <tr style={{textAlign: "center", color: "black"}}>
                <th>Professor Id</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.professors.map(professors =>
                <tr style={{textAlign: "center"}} key={professors.professor_id}>
                  <td>{professors.professor_id}</td>
                  <td>{professors.professor_first_name}</td>
                  <td>{professors.professor_last_name}</td>
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

export default withRouter(ProfessorView);
import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import StudentDataService from '../../services/StudentDataService'

class StudentView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      message: null
    }
    this.refreshStudentDirectory = this.refreshStudentDirectory.bind(this)
    this.updateStudentDirectory = this.updateStudentDirectory.bind(this)
    }

    componentDidMount() {
      this.refreshStudentDirectory()
    }

    refreshStudentDirectory() {
      StudentDataService.getAllStudents().then(response => {this.setState({students: response.data})})
    }

    updateStudentDirectory(lastName, firstName) { 
      StudentDataService.getStudentByName(lastName, firstName).then(response => {this.setState({students: response.data})})
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
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.students.map((count, students) =>
                <tr style={{textAlign: "center", color: "green"}} key={count}>
                  <td>{students.student_first_name}</td>
                  <td>{students.student_last_name}</td>
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

export default withRouter(StudentView);
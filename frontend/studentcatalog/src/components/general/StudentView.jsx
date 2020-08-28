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
            <Link to="/">Student View</Link> | <Link to="/professorView">Professor View</Link></h1><br></br>
        <div className="jumbotron" style={{backgroundColor: "gray", color: "white"}}>
          <table className="table">
            <thead>
              <tr style={{textAlign: "center", color: "black"}}>
                <th>Student Id</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.students.map(students =>
                <tr style={{textAlign: "center"}} key={students.student_id}>
                  <td>{students.student_id}</td>
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
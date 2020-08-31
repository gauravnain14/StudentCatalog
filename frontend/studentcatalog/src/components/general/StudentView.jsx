import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StudentDataService from '../../services/StudentDataService'

export default class StudentView extends Component {
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
      <div className="container" style={{backgroundColor: "gray", color: "white"}}>
        <h1 style={{textAlign:"center"}}>
          <table className="table"style={{backgroundColor: "lightgray", color: "black"}}>
            <tr>
              <td><Link to="/">Student View</Link><h5>(<Link to="/addStudent">Add Student</Link>)</h5></td>
              <td><Link to="/professorView">Professor View</Link><h5>(<Link to="/addProfessor">Add Professor</Link>)</h5></td>
              </tr>
          </table>
          </h1>
            
            
        <div className="jumbotron" style={{backgroundColor: '#129FFF', color: "white"}}>
          <table className="table">
            <thead>
              <tr style={{textAlign: "center", color: "black"}}>
                
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.students.map(students =>
                <tr style={{textAlign: "center", color: "black"}} key={students.students_id}>
                  
                  <td>{students.studentFirstName}</td>
                  <td>{students.studentLastName}</td>
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


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
      <div className="container" style={{backgroundColor: "yellowgreen", color: "white"}}>
        <h1 style={{textAlign:"center"}}>
          <table className="table"style={{backgroundColor: "yellowgreen", color: "black"}}>
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
              </tr>
            </thead>
            <tbody>
            {
              this.state.students.map(students =>
                <tr style={{textAlign: "center", color: "white"}} key={students.students_id}>
                  
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


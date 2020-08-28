import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StudentDataService from '../../services/StudentDataService'

class AddStudent extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            ssn: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
      }

      handleSubmit() {
        let student = {
          id: 0,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          ssn: this.state.ssn
        }
        StudentDataService.addStudent(student)
      }


    render() {
      return(
            <div><h1 style={{textAlign:"center"}}>
            <table className="table"><tr>
            <td><Link to="/">Student View</Link><h5>(<Link to="/addStudent">Add Student</Link>)</h5></td>
            <td><Link to="/professorView">Professor View</Link><h5>(<Link to="/addProfessor">Add Professor</Link>)</h5></td>
            </tr> </table></h1>

            <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                         <label>First Name:</label><input className="form-control" type="text" name="firstName" onChange={this.handleChange}></input>
                        </div><div>
                         <label>Last Name:</label><input className="form-control" type="text" name="lastName" onChange={this.handleChange}></input>
                        </div><div>
                         <label>Social Security Number:</label><input className="form-control" type="text" name="ssn" onChange={this.handleChange}></input>
                        </div><br/><br/>
                      <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form>
                </div>
        </div>
      )
    }
  }
  
  export default AddStudent;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProfessorDataService from '../../services/ProfessorDataService'

class AddProfessor extends Component {
    constructor(props){
        super(props)
        this.state = {
          professorId: this.props.match.params.professorId,
          professorFirstName: '',
          professorLastName: '',
          professorSsn: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
      }

      handleSubmit() {
        let professor = {
          professorId: this.state.professorId,
          professorFirstName: this.state.professorFirstName,
          professorLastName: this.state.professorLastName,
          professorSsn: this.state.professorSsn
        }
        ProfessorDataService.addProfessor(professor)
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
                         <label>Professor Id: </label>
                         <input className="form-control" type="text" value={this.state.professorId} disabled/>
                         <label>First Name:</label><input className="form-control" type="text" name="professorFirstName" onChange={this.handleChange}></input>
                        </div><div>
                         <label>Last Name:</label><input className="form-control" type="text" name="professorLastName" onChange={this.handleChange}></input>
                        </div><div>
                         <label>Social Security Number:</label><input className="form-control" type="text" name="professorSsn" onChange={this.handleChange}></input>
                        </div><br/><br/>
                      <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form>
                </div>
        </div>
      )
    }
  }
  
  export default AddProfessor;
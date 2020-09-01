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
            <table className="table"  style={{backgroundColor: "yellowgreen", color: "white"}}><tr>
            <td><Link to="/">Student View</Link><h5>(<Link to="/addStudent">Add Student</Link>)</h5></td>
            <td><Link to="/professorView">Professor View</Link><h5>(<Link to="/addProfessor">Add Professor</Link>)</h5></td>
            </tr> </table></h1>
            
            <div className="container" style={{backgroundColor: '#129FFF', color: "black"}}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <label><b><h4>Professor Id: </h4></b></label>
                         <input className="form-control" type="text" value={this.state.professorId} disabled/><br/>
                         <label><b><h4>Professor First Name: </h4></b></label><input className="form-control" type="text" name="professorFirstName" onChange={this.handleChange}></input>
                        </div><div><br/>
                        <label><b><h4>Professor Last Name: </h4></b></label><input className="form-control" type="text" name="professorLastName" onChange={this.handleChange}></input>
                        </div><div><br/>
                        <label><b><h4>Professor Social Security Number: </h4></b></label><input className="form-control" type="text" name="professorSsn" onChange={this.handleChange}></input>
                        </div><br/><br/>
                      <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form>
                </div>
            </div>
      )
    }
  }
  
  export default AddProfessor;
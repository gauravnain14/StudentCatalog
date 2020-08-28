import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AddProfessor extends Component {
    render() {
      return(
        <div>

<h1 style={{textAlign:"center"}}>
          <table className="table">
            <tr>
              <td><Link to="/">Student View</Link><h5>(<Link to="/addStudent">Add Student</Link>)</h5></td>
              <td><Link to="/professorView">Professor View</Link><h5>(<Link to="/addProfessor">Add Professor</Link>)</h5></td>
              </tr>
          </table>
          </h1>
          <h1>Currently Under Maintenance</h1>
        </div>
      )
    }
  }
  
  export default AddProfessor;
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StudentView from './StudentView'
import ProfessorView from './ProfessorView'
import AddStudent from './AddStudent'
import AddProfessor from './AddProfessor'

class Router extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={StudentView}></Route>
            <Route path="/professorView" component={ProfessorView}></Route>
            <Route path="/addStudent" component={AddStudent}></Route>
            <Route path="/addProfessor" component={AddProfessor}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router;
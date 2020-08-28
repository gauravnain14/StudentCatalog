import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StudentView from './StudentView'
import ProfessorView from './ProfessorView'

class Router extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={StudentView}></Route>
            <Route path="/professorView" component={ProfessorView}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router;
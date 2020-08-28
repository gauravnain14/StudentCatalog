import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StudentDash from './StudentDash'

class Router extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={StudentView}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Router;
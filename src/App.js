import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';

export default class App extends Component {
  render() {
    return (
      <div className = "App">

        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/create" exact component={Recipe}/>
        </Switch>

      </div>
    )
  }
}

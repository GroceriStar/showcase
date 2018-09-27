import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Meal from './components/Meal/Meal';
class Router extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App}/>
          <Route path="/meal/:id" component={Meal}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;

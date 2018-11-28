import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import RenderGroceryById from './components/RenderGroceryById/RenderGroceryById';

import AntdLayout from './layouts/GroceryList/AntdLayout'

class Router extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App}/>
          <Route path="/grocery/:id" component={RenderGroceryById}/>
          {/* not finished
            <Route path="/design/grocery/:id" component={AntdLayout}/>*/}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeView from './views/HomeView'

import GroceriesView from './views/GroceriesView'
import GroceryView from './views/GroceryView'
import ManageGroceryView from './views/ManageGroceryView'


import AntdLayout from './layouts/GroceryList/AntdLayout'

import CleanLayout from './layouts/GroceryList/CleanLayout'

class Router extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={HomeView} />

          <Route path="/grocery/:id" component={GroceryView} />

          <Route path="/design/grocery/:id" component={AntdLayout} />

          <Route path="/groceries" component={GroceriesView} />

          <Route path="/manage/grocery/:id" component={ManageGroceryView} />

        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;

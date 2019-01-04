import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeView from './views/HomeView'
import HomeRecipeView from './views/HomeRecipeView'
import PDFView from './views/PDFView'

import GroceriesView from './views/GroceriesView'
import GroceryView from './views/GroceryView'
import ManageGroceryView from './views/ManageGroceryView'


import AntdLayout from './layouts/GroceryList/AntdLayout'

import CleanLayout from './layouts/GroceryList/CleanLayout'

// @TODO later it'll have a config version
// @TODO maybe we should generate a whole <Link />? looks like this is a perfect place for doing it.

const getRecipeLink = (id) => {
  return '/recipe/'+ id;
}

class Router extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={HomeView} />
          <Route path="/home2" exact component={HomeRecipeView} />
          <Route path="/pdf" exact component={PDFView} />


          <Route path="/grocery/:id" component={GroceryView} />

          <Route path="/design/grocery/:id" component={AntdLayout} />

          <Route path="/groceries" component={GroceriesView} />

          <Route path="/manage/grocery/:id" component={ManageGroceryView} />

        </Switch>
      </BrowserRouter>
    )
  }
}

export { Router, getRecipeLink };

import React, { Component, Fragment } from 'react';

import { getGroceryCollection } from "./../selectors/selector.js";

// @TODO I want to have long view and a short view.
// Long view is related to viewing ingredients as part of departments
// short view related to viewing only list on ingredients.


class ManageGroceryView extends Component {


  render() {
    console.log( getGroceryCollection() );
    // const data = this.state.data.filter(
    //   d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    // );

    return (
      <Fragment>
        <h1>Manage Grocery List</h1>
        1. Change name
        <hr />
        2. Hide/Unhide department
        3. Delete Ingredients from grocery list.
      </Fragment>
    );
  }
}

export default ManageGroceryView;

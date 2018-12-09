import React, { Component, Fragment } from 'react'
import {
  getGroceryCollection,
  getAllGrocery
} from "./../selectors/selector.js"

import GroceryList from '../components/GroceryList/GroceryList'
import _ from 'lodash'

class GroceriesView extends Component {


  render() {

    const collection = getGroceryCollection();
    // console.log( getAllGrocery() );
    // const data = this.state.data.filter(
    //   d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    // );

    return (
      <Fragment>
        <GroceryList collection={collection} />
      </Fragment>
    );
  }
}

export default GroceriesView;

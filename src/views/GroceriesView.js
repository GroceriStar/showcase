import React, { Component, Fragment } from 'react'
import _ from 'lodash'

import {
  getGroceryCollection,
  getAllGrocery
} from "./../selectors/selector.js"

import GroceryList2 from '../components/GroceryList/GroceryList'


class GroceriesView extends Component {


  render() {

    const collection = getGroceryCollection();
    // console.log( getAllGrocery() );
    // const data = this.state.data.filter(
    //   d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    // );
    // <GroceryList collection={collection} />
    return (
      <Fragment>
        <GroceryList2 items={collection} />

      </Fragment>
    );
  }
}

export default GroceriesView;

import React, { Component, Fragment } from 'react'
// import _ from 'lodash'

import {
  getGroceryCollection
} from "./../selectors/selector.js"

import GroceryList from '../components/GroceryList/GroceryList'


class GroceriesView extends Component {


  render() {

    const collection = getGroceryCollection();
    // console.log( getAllGrocery() );
    // const data = this.state.data.filter(
    //   d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    // );

    return (
      <Fragment>
        <GroceryList items={collection} />

      </Fragment>
    );
  }
}

export default GroceriesView;

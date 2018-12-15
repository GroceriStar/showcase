import React, { Component, Fragment } from 'react';

import { getGroceryCollection, getGroceryById } from "./../selectors/selector.js";




class GroceryView extends Component {


  render() {

    const { id } = this.props.match.params;

    console.log( getGroceryCollection() );

    // console.log( getGroceryById(id) );


    // const data = this.state.data.filter(
    //   d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    // );

    return (
      <Fragment>

      </Fragment>
    );
  }
}

export default GroceryView;

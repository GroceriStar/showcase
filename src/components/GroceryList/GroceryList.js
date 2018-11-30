{collection.map(item => (

  <Item
    key={shortid.generate()}
    department={item.department}
    ingredients={item.ingredients}
  />

))}

import React, { Component } from "react";
import Item from './Item.js';
import shortid from "shortid";

// right now this component just cover our current case,
// but later i want to make it more extendable, so it can handle a different layouts that we'll need to have.

class GroceryList extends Component {

  // constructor(props){
  //   super(props);
  //   // this.state = {
  //   //
  //   // }
  // }

  /* maybe we can create a statement,
    when if we don't have id field - then we use a shordid */
  render() {
    let { collection } = this.props;
    return (
      <ul>
        {collection.map(item => (

          <Item
            key={shortid.generate()}
            department={item.department}
            ingredients={item.ingredients}
          />

        ))}
      </ul>
  )}

}

export default GroceryList;

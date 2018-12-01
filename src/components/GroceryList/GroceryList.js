
import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Item from './Item.js';
import shortid from "shortid";

// right now this component just cover our current case,
// but later i want to make it more extendable, so it can handle a different layouts that we'll need to have.

const ViewGroceryLink = ({ id, title }) => (
  <Link to={'/grocery/' + id }>
    View "{title}" Template
  </Link>
);

const ManageGroceryLink = ({ id, title }) => (

  <Link to={'/grocery/' + id }>
    View "{title}" Template
  </Link>
);
// title only
const GroceryItemSimple = ({ id, name }) => (
    <li key={id}>
      {name}
    </li>
);


class GroceryList extends Component {

  // constructor(props){
  //   super(props);
  //   // this.state = {
  //   //
  //   // }
  // }

  /* maybe we can create a statement,
    when if we don't have id field - then we use a shordid */

    // <Item
    //   key={shortid.generate()}
    //   department={item.department}
    //   ingredients={item.ingredients}
    // />
  render() {
    let { collection } = this.props;
    return (
      <ul>
        {collection.map(item => (

          <li>
            ID: {item.id}
            Name: {item.name}
            <pre>
            {item.departments}
            </pre>
            <ViewGroceryLink id={item.id} title={item.name} />
            <hr />
          </li>

        ))}
      </ul>
  )}

}

export default GroceryList;

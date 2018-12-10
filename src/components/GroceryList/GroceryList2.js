
import React, { Component } from "react"
import { Link } from 'react-router-dom'

import Item from './Item.js';


import shortid from "shortid";

import { List } from '@groceristar/grocery-component';

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






const Wrapper = ({ children }) => (
  <ul>{children}</ul>
);

const renderItem2 = ({ key, value }) => (
  <Fragment>
    ID: {value.id}
    Name: {value.name}
    <pre>
    {value.departments}
    </pre>
    <ViewGroceryLink id={value.id} title={value.name} />
    <hr />
  </Fragment>
);

const GL2 = ({ items, renderItem2 }) => (
  <Wrapper>
    <List items={items} renderItem={renderItem2} />
  </Wrapper>
);


class GroceryList2 extends Component {

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

export default GroceryList2;

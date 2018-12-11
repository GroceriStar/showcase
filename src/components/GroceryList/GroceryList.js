import React, { Component, Fragment } from "react"
import { Link } from 'react-router-dom'

import Item from './Item.js';



import uuidv1 from 'uuid/v1';

import { List } from '@groceristar/grocery-component';

//@TODO this file should be improved. Maybe splitted with structure.
// i don't know how exactly it should looks, but not like this right know
// because it's more looking like layout file, not like a list component that i want to see
// i want to see it similar to our DefaultList structure


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

//  ---- here actually our GL list started.
const Wrapper = ({ children }) => (
  <ul>{children}</ul>
);


    // <Item
    //   key={shortid.generate()}
    //   department={item.department}
    //   ingredients={item.ingredients}
    // />

const renderItem2 = ({ key, value }) => (
  <Fragment>
    <li>
      ID: {value.id}
      Name: {value.name}
      <pre>
      {value.departments}
      </pre>
      <ViewGroceryLink id={value.id} title={value.name} />
      <hr />
    </li>
  </Fragment>

);

const RenderItem = ({ data, id }) => {

  return (
    <Fragment>
      ID: {data.id}
      Name: {data.name}
      <pre>
      {data.departments}
      </pre>
      <ViewGroceryLink id={data.id} title={data.name} />
      <hr />
    </Fragment>


  )

}

const GroceryList2 = ({ items }) => (
  <Wrapper>
    <List items={items}>
      {(data) =>
        <RenderItem data={data} key={uuidv1()} id={uuidv1()} />
      }
      </List>
  </Wrapper>
);


export default GroceryList2;

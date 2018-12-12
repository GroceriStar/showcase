import React, { Component, Fragment } from "react";
import uuidv1 from 'uuid/v1';

import Item from './Item.js';
import { List } from '@groceristar/grocery-component';


// right now this component just cover our current case,
// but later i want to make it more extendable, so it can handle a different layouts that we'll need to have.

// <Item
//   key={shortid.generate()}
//   department={item.department}
//   ingredients={item.ingredients}
// />

const Wrapper = ({ children }) => (
  <ul>{children}</ul>
);

const RenderItem = ({ data, id }) => {
  return (
    <Fragment>

      <Item
        key={id}
        department={data.department}
        ingredients={data.ingredients}
      />
    </Fragment>
  )
}

const DepartmentList = ({ items }) => (
  <Wrapper>
    <List items={items}>
      {(data) =>
        <RenderItem data={data} key={uuidv1()} id={uuidv1()} />
      }
      </List>
  </Wrapper>
);

export default DepartmentList;

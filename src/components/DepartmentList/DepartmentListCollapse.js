import React, { Component, Fragment } from "react";
import { Collapse } from 'antd';
import uuidv1 from 'uuid/v1';

import { List } from '@groceristar/grocery-component';

import IngredientList from '../Ingredients/IngredientList'

// right now this component just cover our current case,
// but later i want to make it more extendable, so it can handle a different layouts that we'll need to have.
const Panel = Collapse.Panel;


const Wrapper = ({ children }) => (
  <Collapse accordion>{children}</Collapse>
);

const RenderItem = ({ data, id }) => {
  return (
    <Fragment>
      <Panel header={data.department} key={id}>
        <IngredientList items={data.ingredients} />
      </Panel>
    </Fragment>
  )
}

const DepartmentListCollapse = ({ items }) => (
  <Wrapper>
    <List items={items}>
      {(data) =>
        <RenderItem data={data} key={uuidv1()} id={uuidv1()} />
      }
      </List>
  </Wrapper>
);

export default DepartmentListCollapse;

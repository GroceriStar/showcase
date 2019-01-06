import React, { Fragment } from "react";
import { Collapse } from 'antd';
import uuidv1 from 'uuid/v1';

import { List, ListF, IngredientList } from '@groceristar/grocery-component';

// we're using ListF because antD cannot handle properly stuff, related to fragments

// right now this component just cover our current case,
// but later i want to make it more extendable, so it can handle a different layouts that we'll need to have.
const Panel = Collapse.Panel;


const Wrapper = ({ children }) => (
  <Collapse accordion>{children}</Collapse>
);

// <Fragment>
//   <Panel header={data.department} key={id}>
//     <p>
//       <IngredientList items={data.ingredients} />
//     </p>
//   </Panel>
// </Fragment>

const RenderItem = ({ data, id }) => {
  // console.log(data);
  return (


      <Panel header={data.department} key={id}>
        <p>
          <IngredientList items={data.ingredients} />
        </p>
      </Panel>

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

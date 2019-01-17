import React, { Component, Fragment } from "react";
// import { DepartmentInfo } from "../DepartmentInfo/DepartmentInfo";

// import { DepartmentList } from '@groceristar/grocery-component'
import DepartmentListCollapse from '../DepartmentList/DepartmentListCollapse';



import { Collapse } from 'antd';
import uuidv1 from 'uuid/v1';

import { IngredientList, DepartmentList } from '@groceristar/grocery-component';


const Panel = Collapse.Panel;
// Looks like we don't use this component. Maybe we shall delete it soon

// NOTE: right now this component is a mess, because of bug from AntD. they fixed it and in next release all start to work well.


class RecipePlain extends Component {

  render() {

    const { items } = this.props;
    // console.log(items)
    return (
      <Fragment>
        { /* DepartmentListCollapse items={items} /> */ }


        <Collapse accordion>

          {items && items.map( (value) =>
             // console.log(value)
             (<Panel header={value.department} key={uuidv1()} >

               <IngredientList items={value.ingredients} />
             </Panel>)
           )}

        </Collapse>

      </Fragment>
    );
  }
}

export default RecipePlain;

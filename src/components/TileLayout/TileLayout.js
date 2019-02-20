import React, { Component, Fragment } from "react";
import { Collapse } from 'antd';
import uuidv1 from 'uuid/v1';

import DepartmentListCollapse from '../DepartmentList/DepartmentListCollapse';

// import { DepartmentInfo } from "../DepartmentInfo/DepartmentInfo";







import { IngredientList } from '@groceristar/grocery-component';


const Panel = Collapse.Panel;




// NOTE: right now this component is a mess, because of bug from AntD. they fixed it and in next release all start to work well.

class TileLayout extends Component {

  render() {

    const { items } = this.props;
    // console.log(items)
    return (
      <Fragment>

    {/*<DepartmentListCollapse items={items} /> */}


        <Collapse accordion>

          {items && items.map( (value) =>
             // console.log(value)
             (<Panel header={value.department} key={uuidv1()} >

               <IngredientList items={value.ingredients} />
             </Panel>)
           )}

        </Collapse>
      {/*}
        <Collapse accordion>

          {items && items.map( (value) =>
             // console.log(value)
             (
               <Fragment>
                 <Panel header={value.department} key={uuidv1()} >
                   <IngredientList items={value.ingredients} />
                 </Panel>
                 </Fragment>
           )
           )}

        </Collapse>
*/}

      </Fragment>
    );
  }
}

export default TileLayout;

import React, { Component } from "react";
import IngredientList from '../Ingredients/IngredientList'

import { Collapse } from 'antd';
import shortid from "shortid";

// right now this component just cover our current case,
// but later i want to make it more extendable, so it can handle a different layouts that we'll need to have.

class DepartmentListCollapse extends Component {

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
      <Collapse accordion>
        {collection.map(item => (
          <Panel header={item.department} key={shortid.generate()}>            
            <IngredientList ingredients={item.ingredients} />
          </Panel>
        ))}
      </Collapse>
  )}

}

export default DepartmentListCollapse;

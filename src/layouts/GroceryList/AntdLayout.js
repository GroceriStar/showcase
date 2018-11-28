import React, { Component } from "react";

import {
  getGroceryById,
  getFullGrocery,
  getGroceryDataFromId
} from "../../selectors/selector";

// import DepartmentListCollapse from './components/DepartmentList/DepartmentListCollapse';
// import DepartmentList from './components/DepartmentList/DepartmentList'
import DepartmentList from '../../components/DepartmentList/DepartmentList'

// @TODO let's discuss why we cannot use a same component, for this version.
// it's a bit unclear for me.


class AntdLayout extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: parseInt(props.match.params.id, 10)
    }
  }

  render() {

    // @TODO maybe we can move this things into selectors?
    let grocery = getGroceryById(this.state.id)[0];
    let groceryName = grocery.name;
    let groceryWithDepAndIng = getFullGrocery(groceryName);

    // let departmentsCollection = getGroceryDataFromId(this.state.id);
// <DepartmentListCollapse collection={groceryWithDepAndIng} />
    return (
      <div>
        <DepartmentList collection={groceryWithDepAndIng} />
      </div>
    );
  }
}

export default AntdLayout;

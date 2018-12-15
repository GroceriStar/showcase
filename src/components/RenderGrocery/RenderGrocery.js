import React, { Component, Fragment } from "react";
// import { DepartmentInfo } from "../DepartmentInfo/DepartmentInfo";
// import DepartmentList from '../DepartmentList/DepartmentList';
import DepartmentListCollapse from '../DepartmentList/DepartmentListCollapse';




// Looks like we don't use this component. Maybe we shall delete it soon

class RenderGrocery extends Component {

  render() {

    const { items } = this.props;
    // console.log(items)
    return (
      <Fragment>
        <DepartmentListCollapse items={items} />

      </Fragment>
    );
  }
}

export { RenderGrocery };

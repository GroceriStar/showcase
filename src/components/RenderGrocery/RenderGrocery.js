import React, { Component } from "react";
// import { DepartmentInfo } from "../DepartmentInfo/DepartmentInfo";
import DepartmentList from '../DepartmentList/DepartmentList';

// Looks like we don't use this component. Maybe we shall delete it soon

class RenderGrocery extends Component {

  render() {

    const { items } = this.props;

    return (
      <div>
        <DepartmentList items={items} />

      </div>
    );
  }
}

export { RenderGrocery };

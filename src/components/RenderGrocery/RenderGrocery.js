import React, { Component } from "react";
// import { DepartmentInfo } from "../DepartmentInfo/DepartmentInfo";
import DepartmentList from '../DepartmentList/DepartmentList';

import { getFullGrocery } from '../../selectors/selector';

// Looks like we don't use this component. Maybe we shall delete it soon

class RenderGrocery extends Component {

  render() {

    let grocery = getFullGrocery(this.props.name);

    return (
      <div>
        <DepartmentList items={grocery} />
        {/*
        <ul>
            {grocery.map(item => (
              <DepartmentInfo
                department={item.department}
                ingredients={item.ingredients}
                key={uuidv1()}
              />
            ))}
        </ul>
        */}
      </div>
    );
  }
}

export { RenderGrocery };

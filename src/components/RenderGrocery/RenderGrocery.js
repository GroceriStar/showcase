import React, { Component } from "react";
import shortid from "shortid";
import { DepartmentInfo } from "../DepartmentInfo/DepartmentInfo";
import { getFullGrocery } from "../selectors/selector.js";



class RenderGrocery extends Component {

  render() {
    // @TODO move this long line here. use a variable. it'll make code more readable
    let grocery = getFullGrocery(this.props.name);
    return (
      <div>
        <ul>
            {grocery.map(item => (
              <DepartmentInfo
                department={item.department}
                ingredients={item.ingredients}
                key={shortid.generate()}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export { RenderGrocery };

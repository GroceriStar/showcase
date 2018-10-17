import React, { Component } from "react";
import { DepartmentInfo } from "../DepartmentInfo/DepartmentInfo";
import gf from "@groceristar/groceristar-fetch/groceristar";

import shortid from "shortid";

// @TODO let's discuss why we cannot use a same component, for this version.
// it's a bit unclear for me.

class RenderGroceryById extends Component {
  constructor(props){
    super(props);
    this.state ={
      id: parseInt(props.match.params.id, 10)
    }
  }
  render() {
    let groceryName = gf.getGroceryById(this.state.id - 10)[0].name;
    let grocery = gf.getGroceryByNameWithDepAndIng(groceryName);
    return (
      <div>
        <ul>
          { grocery.map(item => (
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

export default RenderGroceryById;

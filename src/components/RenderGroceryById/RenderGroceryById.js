import React, { Component } from "react";
import { DepartmentInfo } from "../DepartmentInfo/DepartmentInfo";
import gf from "@groceristar/groceristar-fetch/groceristar";

import shortid from "shortid";

// @TODO let's discuss why we cannot use a same component, for this version.
// it's a bit unclear for me.

class RenderGroceryById extends Component {
  render() {
    let id = parseInt(this.props.match.params.id, 10);
    let groceryName = gf.getGroceryById(id - 10)[0].name;
    return (
      <div>
        <ul>
          {gf.getGroceryByNameWithDepAndIng(groceryName)
            .map(item => (
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

import React, { Component } from "react";
import { DepartmentInfo } from "../DepartmentInfo/DepartmentInfo";
import gf from "@groceristar/groceristar-fetch/groceristar";

import shortid from "shortid";

// @TODO let's discuss why we cannot use a same component, for this version.
// it's a bit unclear for me.

class RenderGroceryById extends Component {
  render() {
    return (
      <div>
        <ul>
          {gf
            .getGroceryByNameWithDepAndIng(
              gf.getGroceryById(parseInt(this.props.match.params.id, 10))[0]
                .name
            )
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

import React, { Component } from 'react'
import shortid from 'shortid'
import { DepartmentInfo } from '../DepartmentInfo/DepartmentInfo'

import gf from '@groceristar/groceristar-fetch/groceristar'

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

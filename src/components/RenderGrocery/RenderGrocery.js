import React, { Component } from 'react'
import shortid from 'shortid'
import { DepartmentInfo } from '../DepartmentInfo/DepartmentInfo'

import gf from '@groceristar/groceristar-fetch/groceristar'

class RenderGrocery extends Component {
  render(){

    return(

      <div>
        <ul>
        {
          gf.getGroceryByNameWithDepAndIng(this.props.name)
            .map((item)=>
                <DepartmentInfo department = {item.department}
                                ingredients = {item.ingredients}
                                key = {shortid.generate()}/>
                )
          }
        </ul>
      </div>
    )
  }
}

export {RenderGrocery};

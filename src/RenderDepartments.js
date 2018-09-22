import React, {Component} from 'react'
import shortid from 'shortid'

import gf from '@groceristar/groceristar-fetch/groceristar'


class RenderDepartments extends Component {
  render(){
    return(
      <div>
        <ul>
        {
          gf.getGroceryByNameWithDepAndIng(this.props.name)
            .map((item)=>
              <li key={shortid.generate()}>
                <h2>{item.department}</h2>
                  <ul>
                    {item.ingredients.map(
                      (item) =>
                      <li key={shortid.generate()}>{item}</li>
                        )}
                  </ul>
              </li>
                )
          }
        </ul>
      </div> )
  }
}

export default RenderDepartments;

import React, {
  Component
} from 'react'
import {
  Ingredients
} from '../Ingredients/Ingredients'
import {
  Ingredients2
} from '../Ingredients/Ingredients2'
import shortid from 'shortid'

class DepartmentInfo extends Component {

  render(){
    return(
      <li key={shortid.generate()}>
        <h2>{this.props.department}</h2>
        <Ingredients ingredients={this.props.ingredients} />
        <Ingredients2 data={this.props.ingredients} />
      </li>
    )
  }
}
// @TODO i think we can use this.props.key, but on parent component
// we can pass a shortid.generate
// so our small component will be clean and don't require changes, when
// we'll connect it to database

export  { DepartmentInfo };

import React, {Component} from 'react'
import {Ingredients} from '../Ingredients/Ingredients'
import shortid from 'shortid'

class DepartmentInfo extends Component{

  render(){
    return(
      <li key={shortid.generate()}>
        <h2>{this.props.department}</h2>
        <Ingredients ingredients = {this.props.ingredients} />
      </li>
    )
  }
}

export  {DepartmentInfo};

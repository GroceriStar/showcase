import React, {Component} from 'react'
import {Ingredients} from '../Ingredients/Ingredients'

class DepartmentInfo extends Component{

  render(){
    return(
      <li key={this.props.key}>
        <h2>{this.props.department}</h2>
        <Ingredients ingredients = {this.props.ingredients} />
      </li>
    )
  }
}

export  {DepartmentInfo};

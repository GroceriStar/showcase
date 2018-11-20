import React, {
  Component
} from 'react'

import IngredientList from '../Ingredients/IngredientList'
import {
  Ingredients2
} from '../Ingredients/Ingredients2'

import shortid from 'shortid'

// This component are layout for displaying data inside of the department list
// We replacing it with DepartmentList -> Item.js

// @TODO i think we should change the name, because i think we have a list item, that store departments information.
// it should explain things better, but i'm not sure if i have a better name for it. Maybe FullDepartmentData or DepartmentDataFull
// and we'll be able to have a short department data as well, if we need it
class DepartmentInfo extends Component {

  render() {
    return (
      <li key={this.props.key}>
        <h2>
          {this.props.department}
        </h2>
        <IngredientList ingredients={this.props.ingredients} />

        {/*<Ingredients2 data={this.props.ingredients} />*/}


      </li>
    );
  }
}
// @TODO i think we can use this.props.key, but on parent component
// we can pass a shortid.generate
// so our small component will be clean and don't require changes, when
// we'll connect it to database

export { DepartmentInfo };

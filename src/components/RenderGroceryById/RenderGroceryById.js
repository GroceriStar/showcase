import React, { Component } from "react";
import { DepartmentInfo } from "../DepartmentInfo/DepartmentInfo";
import {
  getGroceryById,
  getFullGrocery,
  getGroceryDataFromId
} from "../selectors/selector.js";

import shortid from "shortid";

import DepartmentList from '../DepartmentList/DepartmentList';
import IngredientList from '../Ingredients/IngredientList'

// @TODO let's discuss why we cannot use a same component, for this version.
// it's a bit unclear for me.



// const DepartmentList = ({ departments }) => (
//   <ul>
//     {departments.map(deparment => (
//       <li>
//         ....
//       </li>
//     ))}
//   </ul>
// );

class RenderGroceryById extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: parseInt(props.match.params.id, 10)
    }
  }

  render() {

    // @TODO maybe we can move this things into selectors?
    let grocery = getGroceryById(this.state.id)[0];
    let groceryName = grocery.name;
    let groceryWithDepAndIng = getFullGrocery(groceryName);

    // let departmentsCollection = getGroceryDataFromId(this.state.id);

    return (
      <div>

        <DepartmentList departments={groceryWithDepAndIng} />

        // <IngredientList ingredients={item.ingredients} />
        {/*
        <ul>

          { groceryWithDepAndIng.map(item => (
              <DepartmentInfo
                department={item.department}
                ingredients={item.ingredients}
                key={shortid.generate()}
              />
            ))}
        </ul>
        */}

      </div>
    );
  }
}

export default RenderGroceryById;

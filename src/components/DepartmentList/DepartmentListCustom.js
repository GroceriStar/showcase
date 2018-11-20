import React, { Component } from "react";
import IngredientCustomList from '../Ingredients/IngredientCustomList.js';


class DepartmentListCustom extends Component {

  // constructor(props){
  //   super(props);
  //   // this.state = {
  //   //
  //   // }
  // }

  /* maybe we can create a statement,
    when if we don't have id field - then we use a shordid */
  render() {
    let { collection } = this.props;
    return (

        {collection.map(item => (

          <IngredientCustomList
            department={item.department}
            ingredients={item.ingredients}
          />

        ))}

  )}

}

export default DepartmentListCustom;

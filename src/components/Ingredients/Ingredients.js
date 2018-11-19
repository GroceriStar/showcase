import React, { Component } from "react";
import shortid from "shortid";

// @TODO i think we have here an Ingredients List.

// @TODO discuss using some of list components as
// https://github.com/developerdizzle/react-virtual-list
// https://www.npmjs.com/package/react-list

// maybe IngredientsList
const Ingredients = ({ ingredients }) => (
  <ul>
    {ingredients.map(ingredient => (
      <li key={shortid.generate()}>
        {ingredient}
      </li>
    ))}
  </ul>
);


// class Ingredients extends Component {
//   render() {
//     return (
//       <ul>
//         {this.props.ingredients.map(ingredient => (
//           <li key={shortid.generate()}>{ingredient}</li>
//         ))}
//       </ul>
//     );
//   }
// }

export { Ingredients };

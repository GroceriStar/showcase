import React, { Component, Fragment } from "react";

import { List, DefaultList } from '@groceristar/grocery-component';
// @TODO i think we have here an Ingredients List.

// @TODO discuss using some of list components as
// https://github.com/developerdizzle/react-virtual-list
// https://www.npmjs.com/package/react-list

// maybe IngredientsList later we should check
// if we have an ingredient id or we generate key by using shortid
const IngredientList = ({ ingredients }) => (
  <Fragment>
    <DefaultList items={ingredients} />
  </Fragment>

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

export default IngredientList

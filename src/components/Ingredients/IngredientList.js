import React, { Fragment } from "react";

import { DefaultList } from '@groceristar/grocery-component';
// @TODO i think we have here an Ingredients List.

// @TODO discuss using some of list components as
// https://github.com/developerdizzle/react-virtual-list
// https://www.npmjs.com/package/react-list

// maybe IngredientsList later we should check
// if we have an ingredient id or we generate key by using import uuidv1 from 'uuid/v1';

// later this checking will be completed at main list object
const IngredientList = ({ items }) => {
  return (
    <Fragment>
      {items && <DefaultList items={items} />}      
    </Fragment>
  )
}


export default IngredientList

import React, { Component, Fragment } from 'react'

import { IngredientList } from '@groceristar/grocery-component'

const ShortDetails = ( props ) => {
  const { id, title, ingredients } = props;

  return(
    <Fragment>
      <h2> ID: {id} </h2>
      <h4> {title} </h4>

      <IngredientList items={ingredients} />

    </Fragment>
  )
}

export default ShortDetails

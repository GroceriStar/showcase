import React, { Component, Fragment } from 'react'

import DirectionList      from './DirectionsList'
import { IngredientList } from '@groceristar/grocery-component'

const MiddleDetails = (props) => {
  const { id, title, description, directions, ingredients } = props;

  return(
    <Fragment>
      <h2> ID: {id} </h2>
      <h4> {title} </h4>

      <DirectionList  items={directions} />
      <IngredientList items={ingredients} />

    </Fragment>
  )
}

export default MiddleDetails

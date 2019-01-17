import React, { Component, Fragment } from 'react'

// this is our structure for recipes
// recipe.id
// recipe.title
// recipe.directions
// recipe.ingredients
// recipe.prep_time
// recipe.total_time
// recipe.recipe_yield
// recipe.url

import DirectionList      from './DirectionsList'
import { IngredientList } from '@groceristar/grocery-component'


const FullDetails = (props) => {

  const {
    id,
    title,
    directions,
    ingredients,
    prep_time,
    total_time,
    recipe_yield,
    url
  } = props;

  // render(){
    return (
      <Fragment>
        <h2> ID: {id} </h2>
        <h4> {title} </h4>

        <DirectionList  items={directions} />
        <IngredientList items={ingredients} />

      </Fragment>
    )
  // }
}

export default FullDetails

import React, { Component } from 'react'
import shortid from 'shortid'

class Ingredients extends Component {

  render(){

    return(
      <ul>
        {this.props.ingredients.map(
          (ingredient) =>
            <li key={shortid.generate()}>{ingredient}</li>
            )}
      </ul>
    )
  }

}

export { Ingredients };

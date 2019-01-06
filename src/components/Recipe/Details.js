import React, { Component, Fragment } from 'react'

import FullDetails   from './FullDetails'
import MiddleDetails from './MiddleDetails'
import ShortDetails  from './ShortDetails'

// const TYPES = [
//
// ]

const Details = ( props ) => {

  const { type, data } = props;
  let layout

  switch (type) {
    case 'full':
      layout = <FullDetails   data={data} />
      break;

    case 'middle':
      layout = <MiddleDetails data={data} />
      break;

    case 'short':
      layout = <ShortDetails  data={data} />
      break;
    // default:

  }


  return(
    <Fragment>
      {layout}
    </Fragment>
  )


}

export default Details

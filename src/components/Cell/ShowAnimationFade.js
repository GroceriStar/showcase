import React, { Component, PureComponent } from 'react'

import { Slug, Fade } from 'mauerwerk'

import InsideLayout from './InsideLayout';

// import RecipeLayout from './RecipeLayout';

class ShowAnimationFade extends PureComponent {
  render(){
    return(
      <Fade
        show={!this.props.open}
        from={{ opacity: 0, transform: "translate3d(0,140px,0)" }}
        enter={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
        leave={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
        delay={this.props.open ? 0 : 400}
      >
        <div className="default">
          {this.props.name}
          {/* Maybe put an icon */}
        </div>

      </Fade>

  )
  }
}

export default ShowAnimationFade;

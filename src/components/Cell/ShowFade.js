import React, { Component } from 'react'

import { Slug, Fade } from 'mauerwerk'

import InsideLayout from './InsideLayout';

import RecipeLayout from './RecipeLayout';

class ShowFade extends Component {
  // shouldComponentUpdate(nextProps) {
  // if (this.props.open !== nextProps.open || this.props.layout !== nextProps.layout) {
  //   console.log("Name and Id RenderFooter **********************");
  //       return true;
  //     }
  //     console.log("False RenderFooter****************************");
  //     return false;
  //   }
  render(){
    return(
      <Fade show={this.props.open} delay={this.props.open ? 400 : 0}>
      <div className="details">
        <Slug delay={600}>

          {/* {children()} ??????? */}
          {/* instead of passing id to layout maybe we should call a function and pass stuff into it?????? */}

          {this.props.layout}

          {/*<InsideLayout id={id} name={name} toggle={toggle}  />*/}

        </Slug>
      </div>
    </Fade>
  )
  }
}

export default ShowFade;

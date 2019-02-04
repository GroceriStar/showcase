import React, { Component } from 'react'

import { Slug, Fade }  from 'mauerwerk'

import InsideLayout    from './InsideLayout';

import RecipeLayout      from './RecipeLayout';



import ShowFade          from './ShowFade';
import ShowAnimationFade from './ShowAnimationFade';

// @TODO can we avoid passing css variable? i think yep
// can we avoid passing a maximized variable - we should explore this
// const styles = {
//
//   cursor: !maximized ? "pointer" : "auto"
// }

//@TODO as we passing a lot of stuff as props, maybe we should have a { attrib } = this.props?
//@TODO for some reasons, when you print a props that we got - we have key = undefined.
// maybe this is because keys attrib at grids also not working very well...
// looks like this is not a big problem, but still - this is not good either
// const Cell2 = ( props ) => {
//   console.log(props);
//   const { toggle, name, height, description, css, open, id } = props;
//   return (
//     <div>This is America </div>
//   )
// }



// we should add checking if we have a name actually.
// because if i'm passing title instead of name - for sure all is crashing now

// const cellLayout = ( props ) => {
//   const { type } = props;
//
//   var layout;
//   if( type == 'grocery-list'){
//     layout = <InsideLayout id={id} name={name} toggle={toggle}  />;
//   } else {
//     // 'recipe' case
//     layout = <RecipeLayout id={id} recipe={this.props.recipe} toggle={toggle} />;
//   }
//
//   return layout;
// }

class Cell extends Component {

  render(){

    // console.log(this.props);

    const { toggle, name, height, description, css, open, id, type } = this.props;
    const cellStyle = { backgroundImage: css, cursor: !open ? "pointer" : "auto" };
    // console.log(this.props);

    var layout;
    if( type == 'grocery-list'){
      layout = <InsideLayout id={id} name={name} toggle={toggle}  />;
    } else {
      // 'recipe' case
      layout = <RecipeLayout id={id} recipe={this.props.recipe} toggle={toggle} />;
    }


    return (

        <div
          className="cell"
          style={cellStyle}
          onClick={!open ? toggle : undefined}
        >

          <ShowFade open={open} layout={layout}/>

          {/* @TODO we should find a way how to minify this animation stuff at our layouts. maybe config will be a huge help for us/?*/}

          <ShowAnimationFade open={open} name={name}/>
        </div>

    )
  }

}


export default Cell;

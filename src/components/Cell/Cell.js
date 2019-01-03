import React, { Component } from 'react'

import { Slug, Fade } from 'mauerwerk'

import InsideLayout from './InsideLayout';

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
const Cell2 = ( props ) => {
  console.log(props);
  const { toggle, name, height, description, css, open, id } = props;
  return (
    <div>This is America </div>
  )
}

// we should add checking if we have a name actually.
// because if i'm passing title instead of name - for sure all is crashing now

class Cell extends Component {

  render(){

    console.log(this.props);

    const { toggle, name, height, description, css, open, id } = this.props;

    var layout;
    if( type == 'grocery-list'){
      layout = <InsideLayout id={id} name={name} toggle={toggle}  />;
    } else {
      layout = ''
    }


    return (

        <div
          className="cell"
          style={{ backgroundImage: css, cursor: !open ? "pointer" : "auto" }}
          onClick={!open ? toggle : undefined}
        >



          <Fade show={open} delay={open ? 400 : 0}>


            <div className="details">
              <Slug delay={600}>

                {/* {children()} ??????? */}
                {/* instead of passing id to layout maybe we should call a function and pass stuff into it?????? */}

                {layout}

                {/*<InsideLayout id={id} name={name} toggle={toggle}  />*/}


              </Slug>
            </div>
          </Fade>

          {/* @TODO we should find a way how to minify this animation stuff at our layouts. maybe config will be a huge help for us/?*/}
          <Fade
            show={!open}
            from={{ opacity: 0, transform: "translate3d(0,140px,0)" }}
            enter={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
            leave={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
            delay={open ? 0 : 400}
          >
            <div className="default">
              {name}
              {/* Maybe put an icon */}
            </div>
          </Fade>

        </div>

    )
  }

}


export default Cell;

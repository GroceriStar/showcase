import React from 'react'

import { Slug, Fade } from 'mauerwerk'

import InsideLayout from './InsideLayout';

// @TODO can we avoid passing css variable? i think yep
// can we avoid passing a maximized variable - we should explore this
// const styles = {
//
//   cursor: !maximized ? "pointer" : "auto"
// }

//@TODO as we passing a lot of stuff as props, maybe we should have a { attrib } = this.props?

const Cell2 = ( props ) => {
  console.log(props);
  const { toggle, name, height, description, css, open, id } = props;
  return (
    <div>This is America </div>
  )
}


const Cell = ({ toggle, name, height, description, css, open, id }) => (
  
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
          <InsideLayout id={id} name={name} toggle={toggle}  />


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
);

export default Cell;

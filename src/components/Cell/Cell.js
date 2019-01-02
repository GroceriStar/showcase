import React from 'react'

import { Slug, Fade } from 'mauerwerk'

import InsideLayout from './InsideLayout';

// @TODO can we avoid passing css variable? i think yep
// can we avoid passing a maximized variable - we should explore this
const styles = {
  backgroundImage: css,
  cursor: !maximized ? "pointer" : "auto"
}

//@TODO as we passing a lot of stuff as props, maybe we should have a { attrib } = this.props?

const Cell = ({ toggle, name, height, description, css, maximized, id }) => (
  <div
    className="cell"
    style={styles}
    onClick={!maximized ? toggle : undefined}
  >
    <Fade show={maximized} delay={maximized ? 400 : 0}>


      <div className="details">
        <Slug delay={600}>

          {/* {children()} ??????? */}

          <InsideLayout id={id} name={name} toggle={toggle}  />


        </Slug>
      </div>
    </Fade>


    <Fade
      show={!maximized}
      from={{ opacity: 0, transform: "translate3d(0,140px,0)" }}
      enter={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
      leave={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
      delay={maximized ? 0 : 400}
    >
      <div className="default">
        {name}
        {/* Maybe put an icon */}
      </div>
    </Fade>

  </div>
);

export default Cell;

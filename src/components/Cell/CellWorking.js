import React from 'react'
import { Icon, Layout } from 'antd'
import { Slug, Fade } from 'mauerwerk'
import { RenderGrocery } from '../RenderGrocery/RenderGrocery'

// @TODO move this stuff
const { Header, Footer, Sider, Content } = Layout;

const Cell = ({ toggle, name, height, description, css, maximized }) => (
  <div
    className="cell"
    style={{ backgroundImage: css, cursor: !maximized ? "pointer" : "auto" }}
    onClick={!maximized ? toggle : undefined}
  >
    <Fade show={maximized} delay={maximized ? 400 : 0}>
      <div className="details">

        <Slug delay={600}>
          <div className="close" style={{ cursor: "pointer" }} onClick={toggle}>
            <Icon type="close" />
          </div>
          <h1>{name}</h1>
          <RenderGrocery name={name} />
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
      <div className="default">{name}</div>
    </Fade>
  </div>
);

export default Cell;

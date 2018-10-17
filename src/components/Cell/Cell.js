import React from 'react'
import { Icon, Layout } from 'antd'
import { Slug, Fade } from 'mauerwerk'
import { RenderGrocery } from '../RenderGrocery/RenderGrocery'
import  GeneratePDF  from '../GeneratePDF/GeneratePDF'
// import groceristar from "@groceristar/groceristar-fetch/groceristar"

// @TODO move this stuff
const { Header, Footer, Sider, Content } = Layout;

const Cell = ({ toggle, name, height, description, css, maximized, id }) => (
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
          <GeneratePDF groceryName={name}/>
          <div>
          <a href= {'/grocery/'+ id}>
          <button type="button">
            {name}
          </button>
        </a>
        </div>
          <RenderGrocery name={name} />
        </Slug>

        <Layout>
          <Header style={{ background: '#fff', color:'red', //padding: 0
        }}>
            Header - {name}
            <div className="close" style={{ cursor: "pointer" }} onClick={toggle}>
              <Icon type="close" />
            </div>

            {/*
              .tile-close {
                font-size: 18px;
                line-height: 64px;
                padding: 0 24px;
                cursor: pointer;
                transition: color .3s;
              }

              tile-close:hover {
                color: #1890ff; // or other color
              }
              */}

            <Icon
              className="tile-close"
              type="close"
              style={{ cursor: "pointer" }}
              onClick={toggle}
            />

          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            // Content

            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <RenderGrocery name={name} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Footer
          </Footer>
        </Layout>


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

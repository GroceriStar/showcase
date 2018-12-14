import React, {
  Component
} from 'react'
// import { Link } from 'react-router-dom'

import { RenderGrocery } from '../RenderGrocery/RenderGrocery'
import  GeneratePDFButton  from '../GeneratePDFButton/GeneratePDFButton'

import { Button, Icon, Layout } from 'antd'

const { Header, Footer, Content } = Layout;


function getLink(id){
  return '/grocery/'+ id;
}

class InsideLayout extends Component {

  // constructor(props) {
  //   super(props);
  //   // maybe we should add to state some default stuff and then check on mount if data,
  //   // that we used was passed into this component
  //   // this.state = {
  //   //   counter
  //   // }
  //
  // }

  render() {
    return (
      <Layout>
        <Header style={{
          background: '#fff',
          color:'red', //padding: 0
      }}>




      
          Header - {this.props.name}

          {/*
          <div className="close" style={{ cursor: "pointer" }} onClick={toggle}>
            <Icon type="close" />
          </div>
          */}


          {/* i think this styles maybe unnecessary. but i'm not sure right now
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
            onClick={this.props.toggle}
          />






        </Header>
        <Content style={{ margin: '24px 16px 0' }}>






          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

          {/* Should we really pass the name? or this is just because we don't have a propper ids here?
          If yes, then we should make it clear, so later we'll be able to */}
            <RenderGrocery name={this.props.name} />
          </div>





        </Content>
        <Footer style={{ textAlign: 'center' }}>








          {/* Should we really pass the name? or this is just because we don't have a propper ids here?
          If yes, then we should make it clear, so later we'll be able to */}

          <GeneratePDFButton name={this.props.name} />
          <br />

          <Button type="primary" icon="right" size="large"
            href={getLink(this.props.id)}>
            View "{this.props.name}"
          </Button>












        </Footer>
      </Layout>
    )
  }

}


export default InsideLayout;

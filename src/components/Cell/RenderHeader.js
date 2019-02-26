import React, {
  Component,
} from 'react'


import { Button, Icon, Layout, Row, Col } from 'antd'


// import { RenderGrocery } from '../RenderGrocery/RenderGrocery'


import TileLayout from '../TileLayout/TileLayout'

import { GeneratePDFButton } from '@groceristar/pdf-export';



import RenderFooter  from './RenderFooter'
import RenderContent from './RenderContent';


const { Header, Footer, Content } = Layout;


const headerStyle = {
  // background: '#fff',
  // color:'red',
  //padding: 0
  fontSize: '20px'
};

const iconStyle = { cursor: "pointer", transition: "color .3s" };


class RenderHeader extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  // if (this.props.name !== nextProps.name || this.props.toggle !== nextProps.toggle) {
  //   console.log("Name and Id RenderFooter **********************");
  //       return true;
  //     }
  //     console.log("False RenderFooter****************************");
  //     return false;
  //   }

  render(){
    return (
      <Header style={headerStyle}>


      <Row>
        <Col span={20}>
          "{this.props.name}" Template
        </Col>
        <Col span={4}>

          <Icon
            className="tile-close"
            type="close"
            style={iconStyle}
            onClick={this.props.toggle}
          />

        </Col>
      </Row>

    </Header>
    )
  }
}

export default RenderHeader;
